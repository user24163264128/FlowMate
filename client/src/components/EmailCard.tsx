interface EmailCardProps {
  subject: string;
  sender: string;
  snippet: string;
}

const EmailCard = ({ subject, sender, snippet }: EmailCardProps) => (
  <div className="border p-4 rounded-xl shadow-sm bg-white">
    <h3 className="font-semibold">{subject}</h3>
    <p className="text-sm text-gray-500">From: {sender}</p>
    <p className="mt-2 text-gray-700">{snippet}</p>
  </div>
);

export default EmailCard;
