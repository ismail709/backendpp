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
        <div className="flex p-9 sm:p-24 text-white">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex flex-col gap-4 flex-1">
              <div className="text-4xl sm:text-6xl font-bold leading-tight font-body">
                Build the backend
                <br />
                the RIGHT way
              </div>
              <p className="text-xl font-body leading-normal">
                We take care of all the tidious work of dealing with the APIs,
                the databases, the authentication, security and performance
                allowing you to focus on your idea.
              </p>
              <button className="bg-primary-300 w-fit px-9 py-4 text-base sm:text-xl font-bold font-body rounded-lg hover:cursor-pointer">
                <Link to="/register">Start building FREE</Link>
              </button>
            </div>
            <div className="order-first sm:order-last flex-1">
              <img src="hero.svg" className="w-full" alt="backend servers" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 p-9 sm:p-24 justify-center items-center">
        <div className="font-body font-bold text-3xl sm:text-5xl">
          Backend++ in motion
        </div>
        <div>
          <iframe
            className="sm:w-[560px] sm:h-[315px] w-[300px] h-[176px]"
            src="https://www.youtube.com/embed/OKeHVwMUT5M?controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="flex flex-col gap-8 p-9 sm:p-24 justify-center items-center">
        <div className="font-body font-bold text-3xl sm:text-5xl">Features</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full font-body">
          <div className="bg-gray-300 h-96 order-2 sm:order-1"></div>
          <div className="flex flex-col gap-4 p-4 sm:p-8 order-1 sm:order-2">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Customizable Database
            </h2>
            <p className="text-xl sm:text-2xl leading-snug">
              You can shape your database in any shape or form you want. It is
              also possible to add all sorts of data types in your tables (
              text, number, date, object, etc )
            </p>
          </div>
          <div className="flex flex-col gap-4 p-4 sm:p-8 order-3">
            <h2 className="text-2xl sm:text-3xl font-bold">REST APIs</h2>
            <p className="text-xl sm:text-2xl leading-snug">
              Creating RESTful APIs has never been easier. Add your endpoint,
              choose its type and voilà!
            </p>
          </div>
          <div className="bg-gray-300 h-96 order-4"></div>
          <div className="bg-gray-300 h-96  order-6 sm:order-5"></div>
          <div className="flex flex-col gap-4 p-4 sm:p-8 order-5 sm:order-6">
            <h2 className="text-2xl sm:text-3xl font-bold">User management</h2>
            <p className="text-xl sm:text-2xl leading-snug">
              Managing your users’ accounts can be challenging, but that’s from
              the past. Now you can add, modify, delete all the registered users
              in your app in one place.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 p-9 sm:p-24 justify-center items-center">
        <div className="font-body font-bold text-3xl sm:text-5xl">
          What People Say
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
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
      <div className="flex flex-col gap-8 p-9 sm:p-24 justify-center items-center">
        <div className="font-body font-bold text-3xl sm:text-5xl text-center">
          The next great app is waiting. No code, no limits.
        </div>
        <div>
          <button className="mt-auto bg-primary-500 text-white w-fit px-9 py-4 text-base sm:text-xl font-bold font-body rounded-lg hover:cursor-pointer">
            <Link to="/register">Get Started</Link>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
