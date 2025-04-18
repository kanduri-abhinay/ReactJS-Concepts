import { useState, useRef } from "react";

const data = [
  {
    title: "title 1",
    description: "This is a dynamic accordion that adjusts based on content.",
  },
  { title: "title 2", description: "No fixed height! It expands smoothly." },
  { title: "title 3", description: "Works with different content lengths!" },
];

function AccordionItem({ item, open, updateOpenIndex, index }) {
  const contentRef = useRef(null);

  return (
    <div>
      <div
        style={{
          cursor: "pointer",
          padding: "8px",
          border: "1px solid black",
          fontWeight: "bold",
        }}
        onClick={() => updateOpenIndex(index)}
      >
        {item.title}
      </div>
      <div
        ref={contentRef}
        style={{
          maxHeight: open ? `${contentRef.current?.scrollHeight}px` : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          padding: open ? "8px" : "0",
          border: open ? "1px solid black" : "none",
        }}
      >
        {item.description}
      </div>
    </div>
  );
}

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {data.map((item, index) => (
        <AccordionItem
          key={item.title}
          item={item}
          index={index}
          updateOpenIndex={() =>
            setOpenIndex(openIndex === index ? null : index)
          }
          open={openIndex === index}
        />
      ))}
    </div>
  );
}

export default Accordion;
