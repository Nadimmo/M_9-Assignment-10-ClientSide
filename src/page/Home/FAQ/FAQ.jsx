/* eslint-disable react/prop-types */
import  { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <button
        className="w-full text-left bg-gray-200 p-4 rounded-md focus:outline-none hover:bg-gray-300"
        onClick={toggleOpen}
      >
        {question}
      </button>
      {isOpen && <div className="p-4 bg-gray-100 border-l-4 border-blue-500">{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    { question: "What is landscape painting?", answer: "Landscape painting depicts natural scenery like mountains, valleys, trees, and rivers, focusing primarily on the view itself." },
    { question: "What are the key elements of a landscape painting?", answer: "Key elements include the horizon line, foreground, middleground, background, light and shadow, and atmospheric perspective." },
    { question: "What materials do I need to start landscape painting?", answer: "You'll need a canvas or paper, paints (oil, acrylic, or watercolor), brushes, a palette, an easel, and additional tools like palette knives and rags." },
    { question: "What are the best paints for landscape painting?", answer: "Oil paints offer rich colors and blend well; acrylic paints dry quickly and are versatile; watercolors provide translucent, delicate effects." },
    { question: "How do I choose a good composition?", answer: "Use the rule of thirds, establish a focal point, balance visual elements, and incorporate leading lines." },
    { question: "How can I create depth in my paintings?", answer: "Use overlapping elements, vary object sizes, apply color gradation, and adjust detail levels." },
    { question: "What techniques capture light and shadow?", answer: "Observe natural light, conduct value studies, use color temperature variations, and layer paints effectively." },
    { question: "What are common challenges and solutions?", answer: "To capture depth, practice perspective and atmospheric perspective. For blending colors, use proper brush techniques. For changing light, work from photos or quickly sketch light patterns." },
    { question: "How important is plein air painting?", answer: "Plein air painting is valuable for capturing true colors, lighting, and atmosphere, enhancing observation skills." },
    { question: "Can I paint landscapes from photographs?", answer: "Yes, photographs can be useful references. Use them to inspire rather than copying exactly to maintain creativity." }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4">
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
};

export default FAQ;
