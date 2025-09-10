import AppProviders from '@/AppProvider';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <AppProviders> {children}</AppProviders>
    </main>
  );
}
