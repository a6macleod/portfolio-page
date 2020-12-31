const Contact = () => {
  return (
    <div className="contact">
      <div className="formContainer">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-recaptcha="true"
        >
          <div className="formInput">
            <label>Your Name:</label> <input type="text" name="name" />
          </div>
          <div className="formInput">
            <label>Your Email:</label> <input type="email" name="email" />
          </div>
          <div className="formInput">
            <label>Message:</label> <textarea name="message"></textarea>
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
