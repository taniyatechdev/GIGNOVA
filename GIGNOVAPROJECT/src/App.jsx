import React, { useState } from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

import Home from "./Home";
import BrowseGigs from "./BrowseGigs";
import PostGig from "./PostGig";
import GigDetails from "./GigDetails";
import About from "./About";
import Contact from "./Contact";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";

function App() {

  const [page, setPage] = useState("home");

  const [selectedGig, setSelectedGig] = useState(null);

  const [user, setUser] = useState(() => {
    const savedUser =
      localStorage.getItem("gignovaLoggedIn");

    return savedUser
      ? JSON.parse(savedUser)
      : null;
  });

  const [gigs, setGigs] = useState([
    {
      id: 1,
      title: "Build a React Website",
      category: "Web Development",
      description:
        "Need a responsive React website for a small business.",
      budget: "₹10,000",
      skills: "React, JavaScript, CSS",
      experience: "Intermediate",
      deadline: "2026-10-15",
      postedBy: "Rahul",
    },

    {
      id: 2,
      title: "Design a Logo",
      category: "Graphic Design",
      description:
        "Looking for a creative logo for a new brand.",
      budget: "₹3,000",
      skills: "Figma, Photoshop, Illustrator",
      experience: "Beginner",
      deadline: "2026-10-10",
      postedBy: "Priya",
    },

    {
      id: 3,
      title: "Write a Blog",
      category: "Content Writing",
      description:
        "Write an informative blog article about technology.",
      budget: "₹2,000",
      skills: "Writing, SEO, Research",
      experience: "Intermediate",
      deadline: "2026-10-05",
      postedBy: "Aman",
    },
  ]);

  const addGig = (newGig) => {
    setGigs((oldGigs) => [
      ...oldGigs,
      newGig,
    ]);

    setPage("browse");
  };

  const deleteGig = (id) => {
    setGigs((oldGigs) =>
      oldGigs.filter((gig) => gig.id !== id)
    );
  };

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);

    localStorage.setItem(
      "gignovaLoggedIn",
      JSON.stringify(loggedInUser)
    );

    setPage("dashboard");
  };

  const handleLogout = () => {
    setUser(null);

    localStorage.removeItem(
      "gignovaLoggedIn"
    );

    setPage("home");
  };

  const viewGig = (gig) => {
    setSelectedGig(gig);
    setPage("details");
  };

  return (
    <>
      <Navbar
        user={user}
        setPage={setPage}
        onLogout={handleLogout}
      />

      <main>

        {page === "home" && (
          <Home
            onBrowse={() => setPage("browse")}
            onPost={() => setPage("post")}
          />
        )}

        {page === "browse" && (
          <BrowseGigs
            gigs={gigs}
            onView={viewGig}
          />
        )}

        {page === "post" && (
          <PostGig
            user={user}
            onAddGig={addGig}
          />
        )}

        {page === "details" && selectedGig && (
          <GigDetails
            gig={selectedGig}
            onBack={() => setPage("browse")}
          />
        )}

        {page === "about" && (
          <About />
        )}

        {page === "contact" && (
          <Contact />
        )}

        {page === "login" && (
          <Login
            setPage={setPage}
            onLogin={handleLogin}
          />
        )}

        {page === "signup" && (
          <Signup
            setPage={setPage}
          />
        )}

        {page === "dashboard" && (
          <Dashboard
            user={user}
            gigs={gigs}
            onDeleteGig={deleteGig}
            onViewGig={viewGig}
          />
        )}

      </main>

      <Footer setPage={setPage} />
    </>
  );
}

export default App;