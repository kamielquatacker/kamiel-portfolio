import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="container">
      <h1>About me</h1>
      <div className="about-container">
        
        <div className="about-image">
          <Image
            src="/about/profile.jpg"
            alt="Profile picture of Kamiel"
            className="profile-picture"
            width={300}
            height={300}
            unoptimized
          />
        </div>
        <div className="about-text">
          {/* who am i */}
          <p>
            Hi, I am Kamiel Quatacker, a software developer based in Belgium. I
            like to thinker and create cool projects in my free time.
          </p>
          {/* what i do */}
          <p>
            Lately I've been doing full-stack web development. Built a car
            valuation tool that's running on autogids.be with Docker, CI/CD, the
            whole setup. Before that it was Python APIs, C# desktop apps, Vue.js
            frontends, basically whatever the project needed.
          </p>

          {/* outside software */}
          <p>
            Outside of software, I skate in summer and snowboard in winter. I'm
            at the gym regularly, go for runs when I feel like it, and kart
            occasionally with a friend who races competitively, that's where the
            whole kart mount idea came from. I spend some of my time on 3D
            design and printing, mostly making stuff I need or want to sell.
            Right now I'm rebuilding a crashed car. Before that I restored a '79
            Honda CB750. Also built my own NAS and run a Raspberry Pi for
            whatever project I'm currently messing with.
          </p>
        </div>
      </div>
    </main>
  );
}
