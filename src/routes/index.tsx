import { createFileRoute, Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <>
      <div>Hello "/"!</div>
      <Button variant="link">Button</Button>
      <Button variant="link" asChild>
        <Link to="/about">Button</Link>
      </Button>
    </>
  );
}
