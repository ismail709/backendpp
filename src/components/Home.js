import React from "react";
import { Link } from "react-router-dom";
import Footer from "./commons/Footer";
import Navbar from "./commons/Navbar";
import ReviewCard from "./commons/ReviewCard";

function Home() {
  return (
    <div>
      <div className="bg-gradient-to-b from-primary-700 to-primary-900">
        <Navbar />
        <div className="flex p-24 text-white">
          <div className="flex flex-row">
            <div className="flex flex-col gap-4 w-1/2">
              <div className="text-6xl font-bold leading-tight font-body">
                Build the backend
                <br />
                the RIGHT way
              </div>
              <p className="text-xl font-body">
                We take care of all the tidious work of dealing with the APIs,
                the databases, the authentication, security and performance
                allowing you to focus on your idea.
              </p>
              <button className="bg-primary-300 w-fit px-9 py-4 text-xl font-bold font-body rounded-lg hover:cursor-pointer">
                <Link to="/register">Start building FREE</Link>
              </button>
            </div>
            <div>
              <img src="hero.svg" width="600" alt="backend servers" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 p-24 justify-center items-center">
        <div className="font-body font-bold text-5xl">Backend++ in motion</div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/OKeHVwMUT5M?controls=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col gap-8 p-24 justify-center items-center">
        <div className="font-body font-bold text-5xl">Features</div>
        <div className="grid grid-cols-2 w-full font-body">
          <div className="bg-gray-300 h-96"></div>
          <div className="flex flex-col gap-4 p-8">
            <h2 className="text-3xl font-bold">Customizable Database</h2>
            <p className="text-2xl leading-snug">
              You can shape your database in any shape or form you want. It is
              also possible to add all sorts of data types in your tables (
              text, number, date, object, etc )
            </p>
          </div>
          <div className="flex flex-col gap-4 p-8">
            <h2 className="text-3xl font-bold">REST APIs</h2>
            <p className="text-2xl leading-snug">
              Creating RESTful APIs has never been easier. Add your endpoint,
              choose its type and voilà!
            </p>
          </div>
          <div className="bg-gray-300 h-96"></div>
          <div className="bg-gray-300 h-96"></div>
          <div className="flex flex-col gap-4 p-8">
            <h2 className="text-3xl font-bold">User management</h2>
            <p className="text-2xl leading-snug">
              Managing your users’ accounts can be challenging, but that’s from
              the past. Now you can add, modify, delete all the registered users
              in your app in one place.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 p-24 justify-center items-center">
        <div className="font-body font-bold text-5xl">What People Say</div>
        <div className="flex gap-8">
          <ReviewCard
            name="Alberto Komar"
            stars={3}
            text="Nisi ex nostrud enim tempor nulla aute nisi qui."
          />
          <ReviewCard
            name="Jabrils Tradif"
            stars={5}
            text="Nisi ex nostrud enim tempor nulla aute nisi qui."
          />
          <ReviewCard
            name="Nogish Herthik"
            stars={4}
            text="Nisi ex nostrud enim tempor nulla aute nisi qui."
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 p-24 justify-center items-center">
        <div className="font-body font-bold text-5xl">
          The next great app is waiting. No code, no limits.
        </div>
        <div>
          <button className="mt-auto bg-primary-500 text-white w-fit px-9 py-4 text-xl font-bold font-body rounded-lg hover:cursor-pointer">
            <Link to="/register">Get Started</Link>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
