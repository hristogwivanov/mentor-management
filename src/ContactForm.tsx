import React from 'react';

const ContactForm: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch('contact.php', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      alert('Message sent!');
      form.reset();
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" required placeholder="Your name" />
      <input name="email" type="email" required placeholder="Your email" />
      <textarea name="message" required placeholder="Your message" />
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
