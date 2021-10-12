import { Component } from "react";
import shortid from "shortid";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import Section from "./components/Section";

import s from "./App.module.css";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = (data) => {
    const { name, number } = data;
    // const { contacts} = this.state;

    const contact = {
      id: shortid.generate(),
      name: name,
      number: number,
    };

    //незнаю как правильно продумать логику

    // contacts.filter(cont => cont.name !== data.name
    //   ? this.setState(prevState => ({
    //     contacts: [contact, ...prevState.contacts],
    //   }))
    //   : alert(`${name} is already in contacts`)
    // )

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  filterName = () => {
    const { contacts, filter } = this.state;
    const normalizerForm = filter.toLowerCase();
    return contacts.filter((el) =>
      el.name.toLowerCase().includes(normalizerForm)
    );
  };

  deliteContacts = (idCont) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((cont) => cont.id !== idCont),
    }));
  };

  render() {
    const { filter } = this.state;
    const listFilter = this.filterName();

    return (
      <div className={s.App}>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.addContact}></ContactForm>
        </Section>

        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter}></Filter>
          <ContactList
            contact={listFilter}
            onDelite={this.deliteContacts}
          ></ContactList>
        </Section>
      </div>
    );
  }
}
export default App;
