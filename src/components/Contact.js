const Contact = () => {
  return (
    <div className="contact">
      <div className="formContainer">
        <form
          name="contactForm"
          method="POST"
          data-netlify-recaptcha="true"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contactForm" />
          <p className="formInput">
            <label>
              <span>Name</span>
              <input type="text" name="name" required />
            </label>
          </p>
          <p className="formInput">
            <label>
              <span>Email</span>
              <input type="email" name="email" required />
            </label>
          </p>
          <p className="formInput">
            <label>
              <span>Message</span>
              <textarea name="message" required></textarea>
            </label>
          </p>
          <div data-netlify-recaptcha="true"></div>
          <div className="formContactButtonContainer">
            <button className="contactButton formContactButton" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
