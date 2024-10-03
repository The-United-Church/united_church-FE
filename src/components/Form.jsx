import React from "react";

export default function Form() {
  return (
    <div>
      <h2 class="reach-out"> Lets Start A Conversation</h2>

      {/* <!-- Contact Form Section --> */}
      <section class="contact">
        <div class="form-container">
          <form
            class="vertical-form"
            action="https://submit-form.com/3cMe44hPR"
          >
            <h2>Contact Us</h2>
            <label for="first-name">First name</label>
            <input id="first-name" name="first-name" type="text" required />
            <label for="last-name">Last name</label>
            <input id="last-name" name="last-name" type="text" required />
            <label for="email">Email</label>
            <input id="email" name="email" type="email" required />
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              cols="15"
              rows="5"
              required
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
}
