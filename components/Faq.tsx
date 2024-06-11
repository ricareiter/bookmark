import FaqItem from "./FaqItem";

const Faq = () => {
  return (
    <section className="container mx-auto p-12 mt-14 mb-12">
      <div className="flex flex-col items-center">
        <div className="text-center mb-12 space-y-6">
          <h3 className="text-3xl font-semibold text-veryDarkBlue">
            Frequently Asked Questions
          </h3>
          <p className="text-lg text-gray-400 max-w-md lg:text-xl lg:max-w-xl">
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </div>
        <div className="mt-4 mb-14 w-full lg:w-2/3 xl:w-2/5">
          <FaqItem
            custom="border-t"
            title="What is Bookmark?"
            faqAnswer="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
          />
          <FaqItem
            title="How can i request a new browser?"
            faqAnswer="Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
          />
          <FaqItem
            title="Is there a mobile app?"
            faqAnswer="Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
          />
          <FaqItem
            title="What about other Chromium browsers?"
            faqAnswer="Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
          />
        </div>
        <div>
          <button className="text-white px-6 py-3 rounded-md bg-softBlue border-2 border-softBlue hover:bg-white hover:text-softBlue">
            More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;
