import { useState, useEffect } from 'react';
import { fetchInbox } from '../../services/gmail';

export const useInbox = () => {
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchInbox()
      .then((data) => setEmails(data))
      .finally(() => setLoading(false));
  }, []);

  return { emails, loading };
};
