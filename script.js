const q = console.log;

data = [
  {
    testimonial:
      "I cannot say enough good things about name1 software! As someone who is not very tech-savvy, I often struggle with using new software and programs. However, name1 has been a game-changer for me. The user-friendly interface and helpful features have made using this software a breeze. Whenever I have encountered any issues or needed assistance, the customer support team has been incredibly helpful and quick to respond. I highly recommend name1 to anyone in need of reliable and user-friendly software. Thank you for all the help, name1!",
    name: "name1",
    job: "Software",
    imgUrl: "download.jpg",
  },
  {
    testimonial:
      "I recently had the pleasure of working with hardware from name2 and I have to say, I am thoroughly impressed. Not only is their hardware top-notch, but their support team is exceptional. Whenever I had a question or concern, they were quick to respond and provided me with the guidance I needed. Their dedication to customer satisfaction is truly commendable. I highly recommend name2 for anyone in need of reliable and high-quality hardware, backed by excellent support. Thank you, name2, for exceeding my expectations.",
    name: "name2",
    job: "Hardware",
    imgUrl: "download (1).jpg",
  },
  {
    testimonial:
      "I recently had the pleasure of using transport services and I must say, I was thoroughly impressed. From the moment I booked my trip, the support provided by the team was exceptional. They were always available to answer any questions or concerns I had, making the entire process seamless and stress-free. But what truly stood out to me was the level of care and attention given to ensuring my journey was comfortable and efficient. The driver was punctual, friendly, and professional, making me feel at ease throughout the entire trip. I highly recommend transport to anyone in need of reliable and top-notch transportation services. Thank you, transport, for making my travel experience a memorable one. Keep up the great work! Sincerely, [name3]",
    name: "name3",
    job: "Transport",
    imgUrl: "download (2).jpg",
  },
  {
    testimonial:
      "I recently had the pleasure of working with job4 and I cannot recommend them enough! From start to finish, the experience was fantastic. The team, especially name3, was incredibly professional and attentive to my needs. Not only did they provide top-notch services, but their prices were also extremely affordable. I was blown away by the quality of work I received for such a reasonable price. I will definitely be using job4 for all of my future needs and highly recommend them to anyone looking for affordable and high-quality services. Thank you, job4, for exceeding my expectations!",
    name: "name4",
    job: "job4",
    imgUrl: "download (3).jpg",
  },
];

let index = 0;

function next() {
  document.getElementById(
    "content"
  ).innerHTML = `<div id="bar" class="bar"></div>
  <p></p>
  <div class="person">
      <div class="img"></div>
      <div>
          <div id="name" class="name"></div>
          <div id="job" class="job"></div>
      </div>
  </div>`;

  if (index == data.length) {
    index = 0;
  }
  document.getElementById("bar").classList.add("go");

  document.querySelector("p").innerText = `${data[index].testimonial}`;
  document.getElementById("name").innerText = `${data[index].name}`;
  document.getElementById("job").innerText = `${data[index].job}`;
  document.getElementsByClassName(
    "img"
  )[0].style = `  background-image: url("${data[index].imgUrl}");
  `;

  index += 1;
}

next();
setInterval(next, 7000);
