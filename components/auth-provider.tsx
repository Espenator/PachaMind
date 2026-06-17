"use client";

import type { Session, User } from "@supabase/supabase-js";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { getSupabaseBrowserClient } from "@/lib/supabase/client";

interface AuthContextValue {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  signInWithEmail: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [supabaseReady, setSupabaseReady] = useState(false);
  const [fatalError, setFatalError] = useState<Error | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    let unsubscribe: (() => void) | undefined;

    async function loadSession() {
      try {
        const supabase = getSupabaseBrowserClient();
        const {
          data: { session: activeSession },
          error,
        } = await supabase.auth.getSession();

        if (error) {
          throw error;
        }

        if (isMounted) {
          setSession(activeSession);
          setSupabaseReady(true);
          setIsLoading(false);
        }

        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, nextSession) => {
          setSession(nextSession);
          setIsLoading(false);
        });

        unsubscribe = () => subscription.unsubscribe();
      } catch (error) {
        if (isMounted) {
          setFatalError(
            error instanceof Error
              ? error
              : new Error("[Supabase] Failed to initialize browser client."),
          );
          setIsLoading(false);
        }
      }
    }

    loadSession().catch((error) => {
      if (isMounted) {
        setFatalError(
          error instanceof Error
            ? error
            : new Error("[Supabase] Failed to initialize browser client."),
        );
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
      unsubscribe?.();
    };
  }, []);

  async function signInWithEmail(email: string) {
    const trimmed = email.trim();
    if (!trimmed) {
      throw new Error("Email is required for Supabase sign in.");
    }

    if (!supabaseReady) {
      throw new Error("[Supabase] Browser client is not ready.");
    }

    const supabase = getSupabaseBrowserClient();
    const { error } = await supabase.auth.signInWithOtp({
      email: trimmed,
      options: {
        emailRedirectTo:
          typeof window !== "undefined" ? `${window.location.origin}/` : undefined,
      },
    });

    if (error) {
      throw error;
    }
  }

  async function signOut() {
    if (!supabaseReady) {
      throw new Error("[Supabase] Browser client is not ready.");
    }

    const supabase = getSupabaseBrowserClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw error;
    }
  }

  if (fatalError) {
    throw fatalError;
  }

  return (
    <AuthContext.Provider
      value={{
        user: session?.user ?? null,
        session,
        isLoading,
        signInWithEmail,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider.");
  }

  return context;
}
