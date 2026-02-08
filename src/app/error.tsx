"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console in development only
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.error("Error boundary caught:", error);
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          {/* Error Icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-magenta/10">
            <svg
              className="h-10 w-10 text-magenta"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl font-bold text-key sm:text-4xl">
            Something went wrong
          </h1>
          <p className="mt-4 text-lg text-key/70">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>

          {/* Error Details (Development Only) */}
          {process.env.NODE_ENV === "development" && error.message && (
            <div className="mt-6 rounded-lg bg-gray-100 p-4 text-left">
              <p className="text-sm font-mono text-key/80">
                <strong>Error:</strong> {error.message}
              </p>
              {error.digest && (
                <p className="mt-2 text-xs font-mono text-key/60">
                  <strong>Digest:</strong> {error.digest}
                </p>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={reset}
              size="lg"
              className="bg-gradient-to-r from-cyan to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white border-0"
            >
              Try Again
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white"
            >
              <a href="/">Return Home</a>
            </Button>
          </div>

          {/* Contact Support */}
          <p className="mt-8 text-sm text-key/60">
            If this problem persists, please{" "}
            <a
              href="/contact"
              className="text-cyan hover:text-cyan-600 underline underline-offset-2 font-semibold"
            >
              contact our support team
            </a>
            .
          </p>
        </div>
      </Container>
    </div>
  );
}
