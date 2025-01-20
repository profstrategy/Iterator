type Item = {
    id: string;
    question?: string;
    answer?: string;
  };
  
  type FAQSection = {
    id: string;
    contents: Item[];
  };
  
  export const faqs: FAQSection[] = [
    {
      id: 'faq',
      contents: [
        {
          id: 'question_1',
          question: 'What services does Itinera Tour offer?',
          answer: "Itinera Tour specializes in luxurious bus rental services for tours, corporate events, school trips, weddings, religious pilgrimages, and more. They offer customized travel solutions tailored to meet your needs."
        },
        
        {
          id: 'question_2',
          question: 'What types of buses are available for rent?',
          answer:
            'Itinera Tour has over 100 luxurious buses, including mini-buses, executive coaches, and large-capacity buses equipped with modern amenities like air conditioning, reclining seats, onboard entertainment, and Wi-Fi.',
        },
        {
          id: 'question_3',
          question: 'Are the buses available for both local and interstate travel?',
          answer:
            'YYes, Itinera Tour provides bus services for local city tours and long-distance interstate travel across Nigeria, ensuring comfort and safety regardless of the destination.',
        },
        {
          id: 'question_4',
          question: 'Is Itinera Tour available 24/7?',
          answer:
            'Absolutely! Itinera Tour operates round the clock, offering 24/7 services to ensure clients can book buses or make inquiries at any time.',
        },
        {
          id: 'question_5',
          question: 'How can I make a reservation?',
          answer:
            'Reservations can be made online through their official website, via phone, or by visiting their office. For convenience, they also offer a customer support team to assist with bookings.',
        },
        {
          id: 'question_6',
          question: 'Do the buses come with drivers?',
          answer:
            'Yes, all rented buses are accompanied by professional, licensed, and experienced drivers to ensure your safety and a hassle-free travel experience.',
        },
        {
          id: 'question_7',
          question: 'What is the cost of renting a bus?',
          answer:
            'The cost depends on the type of bus, the duration of the rental, and the distance of travel. Itinera Tour provides competitive pricing and custom quotes based on your specific needs.',
        },
        {
          id: 'question_8',
          question: 'Are there any discounts for large group bookings or long-term rentals?',
          answer:
            'Yes, Itinera Tour offers discounts for large group bookings, corporate clients, and long-term rentals. Contact their customer service for more details on available packages and promotions.',
        },
        {
          id: 'question_9',
          question: 'What safety measures are in place for passengers?',
          answer:
            'Safety is a top priority at Itinera Tour. Their buses are regularly maintained, and they comply with all safety regulations. Each bus is equipped with first-aid kits, fire extinguishers, and GPS tracking systems.',
        },
        {
          id: 'question_10',
          question: 'Can I cancel or reschedule my booking?',
          answer:
            'Yes, Itinera Tour allows cancellations and rescheduling. However, specific policies, such as refund timelines and fees, may apply. Contact customer service for assistance with changes to your booking.',
        },
      ],
    },
  ];
  