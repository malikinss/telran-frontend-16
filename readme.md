# Homework 16 – Animation & Image Gallery

## Task Definition

This homework consists of two independent parts:

1. Create an animation where a box moves **forward and backward inside a container**.
2. Implement an **HTML image gallery** with next/previous navigation.

---

## Description

This project demonstrates two key frontend concepts:

### 🔹 Animation

A moving box inside a container that continuously changes direction when reaching boundaries.

### 🔹 Gallery

A simple image gallery that allows users to navigate through images using **Next** and **Previous** buttons.

Both parts are implemented using **vanilla JavaScript (ES6 modules)** with clean architecture and separation of concerns.

---

## Purpose

The goals of this project are:

- Practice **DOM manipulation**
- Understand **animation logic using JavaScript**
- Work with **timers (`setInterval`)**
- Implement **state management** in UI components
- Learn how to structure code using **services and modules**
- Build reusable logic for UI interactions

---

## Project Structure

```

/
├─ animation/
│  ├─ index.html
│  └─ src/
│     ├─ script.js
│     ├─ CSS/
│     │   └─ style.css
│     └─ Service/
│         └─ BoxMover.js
│
├─ gallery/
│  ├─ index.html
│  └─ src/
│     ├─ script.js
│     ├─ Images/
│     │   ├─ Rouen_Cathedral_1.jpg
│     │   ├─ ...
│     │   └─ Rouen_Cathedral_6.jpg
│     └─ Service/
│         └─ Gallery.js
│
└─ README.md

```

---

## How It Works

### 🔸 Animation Logic

- The `BoxMover` class controls movement of the box.
- It uses `setInterval` to update position continuously.
- The box moves diagonally by updating:
    - `top`
    - `left`
- When the box reaches container boundaries:
    - Direction is reversed (`direction *= -1`)
- Movement is smooth and continuous.

#### Key Concepts:

- Position tracking (`pos`)
- Direction switching
- Boundary detection
- DOM style updates

---

### 🔸 Gallery Logic

- The `Gallery` class manages image navigation.
- It keeps track of:
    - Current image index
    - First and last image
- Navigation methods:
    - `next()` → moves forward
    - `prev()` → moves backward
- Images loop:
    - After last → goes to first
    - Before first → goes to last

#### UI Interaction:

- Buttons trigger:
    - `showNext()`
    - `showPrev()`
- Image source (`src`) updates dynamically.

---

## Output Example

### Animation

- A red square moves diagonally inside a blue container.
- When it hits the edge, it changes direction.

### Gallery

- An image is displayed between two buttons:

```

[Prev]   IMAGE   [Next]

```

- Clicking buttons updates the image.

---

## Usage

### ▶️ Animation

1. Open:

```

animation/index.html

```

2. The box starts moving automatically.
3. Observe forward/backward motion.

---

### ▶️ Gallery

1. Open:

```

gallery/index.html

```

2. Click:

- **Next** → next image
- **Prev** → previous image

3. Images loop infinitely.

---

## Dependencies

- HTML5
- CSS3
- Vanilla JavaScript (ES6 Modules)

❌ No external libraries used

---

## Features Implemented

### Animation

- Smooth continuous movement
- Direction switching at boundaries
- Configurable speed and step
- Encapsulated logic in `BoxMover`

### Gallery

- Next/Previous navigation
- Infinite looping
- Clean separation of UI and logic
- Input validation for gallery size

---

## Project Status

**Status:** Completed ✅

- Animation fully working
- Gallery navigation implemented
- Clean modular architecture
- Error handling included

---

## License

MIT License

---

## Conclusion

This project demonstrates:

- How to build **basic animations without CSS frameworks**
- Managing **state and movement logic manually**
- Creating reusable **UI services (BoxMover, Gallery)**
- Handling user interaction through the DOM
- Writing clean, modular, and maintainable JavaScript

It serves as a strong foundation for more advanced topics like:

- Canvas animations
- React state management
- Advanced UI/UX interactions

---

Made with ❤️ and `HTML` + `CSS3` + `JavaScript` by **Sam-Shepsel Malikin 🎓**
