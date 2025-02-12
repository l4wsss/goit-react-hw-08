import s from "../components/App/App.module.css";

const HomePage = () => {
  return (
    <div>
      <p>
        This app is a web-based contact book (Phonebook) that allows users to
        add, view, search, and delete contacts.
      </p>
      <h2>Key features:</h2>
      <ul>
        <li className={s.li}>
          <b>Add contact: </b>
          <p>
            The user can enter a name and phone number, click the
            {`"Add contact"`} button, and save the information.
          </p>
        </li>
        <li className={s.li}>
          <b>Search contacts: </b>
          <p>The quick search function by name helps find the desired entry.</p>
        </li>
        <li className={s.li}>
          <b>Delete contact: </b>
          <p>
            Each entry has a {`"Delete"`} button that allows the user to remove
            it from the list.
          </p>
        </li>
      </ul>
      <p>
        The app has a simple and intuitive interface that allows users to manage
        their contacts quickly.
      </p>
    </div>
  );
};

export default HomePage;
