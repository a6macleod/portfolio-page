const Contact = () => {
  return (
    <div className="contact">
      <div className="formContainer">
        <form
          name="contactForm"
          method="POST"
          data-netlify-recaptcha="true"
          netlify
        >
          <div className="formInput">
            <label for="name">Your Name:</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="formInput">
            <label for="email">Your Email:</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="formInput">
            <label for="message">Message:</label>
            <textarea name="message" id="message"></textarea>
          </div>
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
