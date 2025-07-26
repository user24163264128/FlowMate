import EmailCard from '../../components/EmailCard';
import { useInbox } from './useInbox';

export default function InboxPage() {
  const { emails, loading } = useInbox();

  if (loading) return <p>Loading inbox...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {emails.map((email: any) => (
  <div key={email.id}>
    <EmailCard
      subject={email.payload?.headers?.find(h => h.name === 'Subject')?.value || '(no subject)'}
      sender={email.payload?.headers?.find(h => h.name === 'From')?.value || ''}
      snippet={email.snippet}
    />
  </div>
))}
    </div>
  );
}
