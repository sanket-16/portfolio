import emailjs from '@emailjs/browser';
import { signal } from '@preact/signals';

const contactForm = () => {
  const name = signal('');
  const email = signal('');
  const subject = signal('');
  const message = signal('');
  const initializeEmailJs = () => {
    emailjs.init(import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY);
  };
  initializeEmailJs();

  const sendMail = (event: Event) => {
    event.preventDefault();
    let templateParams = {
      from_name: name,
      email_id: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        import.meta.env.PUBLIC_SERVICE_ID,
        import.meta.env.PUBLIC_TEMPLATE_ID,
        templateParams
      )
      .then(
        function (response) {
          alert('Message sent successfully.');
          console.log('SUCCESS!', response.status, response.text);
          name.value = '';
          email.value = '';
          subject.value = '';
          message.value = '';
        },
        function (error) {
          alert('Something went wrong, Please try again later.');
          console.log('FAILED...', error);
        }
      );
  };
  return (
    <section class="hide min-h-[80vh]" id="contact">
      <div class="flex flex-col gap-6 py-10 px-10 md:px-40 min-h-[80vh]">
        <h1 class="text-6xl font-bold">Contact</h1>
        <div class="min-h-[60vh] w-full flex items-center justify-center">
          <form
            class="grid md:grid-cols-4 grid-cols-1 gap-6"
            onSubmit={(event) => sendMail(event)}
          >
            <div class="flex flex-col gap-2">
              <label for="name" class="text-white/80">
                Name
              </label>
              <input
                value={name}
                onInput={(event) => (name.value = event.currentTarget.value)}
                type="text"
                id="name"
                class="rounded-md p-4 text-white bg-transparent border-2 focus:outline-none"
              />
            </div>
            <div class="md:col-span-3 flex flex-col gap-2">
              <label for="email" class="text-white/80">
                E-mail
              </label>
              <input
                value={email}
                onInput={(event) => (email.value = event.currentTarget.value)}
                type="text"
                id="email"
                class="rounded-md p-4 text-white bg-transparent border-2 focus:outline-none"
              />
            </div>
            <div class="md:col-span-4 flex flex-col gap-2">
              <label for="subject" class="text-white/80">
                Subject
              </label>
              <input
                value={subject}
                onInput={(event) => (subject.value = event.currentTarget.value)}
                type="text"
                id="subject"
                class="rounded-md p-4 text-white bg-transparent border-2 focus:outline-none"
              />
            </div>
            <div class="md:col-span-4 flex flex-col gap-2">
              <label for="message" class="text-white/80">
                Message
              </label>
              <textarea
                value={message}
                onInput={(event) => (message.value = event.currentTarget.value)}
                id="message"
                class="rounded-md p-4 text-white bg-transparent border-2 focus:outline-none h-60"
              ></textarea>
            </div>
            <div class="md:col-span-4 flex items-center justify-center">
              <button
                type="submit"
                class="py-4 px-8 rounded-md bg-white text-dark-blue font-bold hover:bg-transparent hover:text-white transition-all hover:border-2 hover:border-white hover:scale-105"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default contactForm;
