'use client';
import ErrorBoundary from "@/components/error-boundary/ErrorBoundary";

export default function Error({ error }: { error: Error }) {
  return <ErrorBoundary error={error}/>;
}
