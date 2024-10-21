import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.homePageWrapper}>
      <h1 className={s.homeHeader}>
        Keep Your Connections Close with this Contacts app
      </h1>
      <p className={s.homeText}>
        Tired of juggling multiple contact lists and losing important
        information our App is the all-in-one solution for managing your
        contacts with ease.
      </p>
    </div>
  );
};

export default HomePage;
