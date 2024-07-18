const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>
        <ul className="content-list">
          <li className="content-list-item">
            <h2 className="title-2">Location</h2>
            <p className="content-list-item-text">Moscow, Russia</p>
          </li>
          <li className="content-list-item">
            <h2 className="title-2">Telegram / WhatsApp</h2>
            <p className="content-list-item-text">
              <a href="tel:+79051234567">+7 (905) 123-45-67</a>
            </p>
          </li>
          <li className="content-list-item">
            <h2 className="title-2">Email</h2>
            <p className="content-list-item-text">
              <a href="mailto:webdev@protonmail.com">webdev@protonmail.com</a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contacts;
