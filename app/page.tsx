import LinkButton from '@/components/ui/LinkButton';

export default function RootPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1>React Server Components and React 19 in the Next.js App Router</h1>
      <LinkButton href="/client-server">Client-server page</LinkButton>
    </div>
  );
}
