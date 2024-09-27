import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="Profile"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                About Me
              </h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                Hello! I&apos;m Harry, a passionate software developer and tech
                enthusiast. I created this blog to share my experiences, tips,
                and tutorials on various programming languages and technologies.
                I believe that learning should be a continuous journey, and
                I&apos;m here to help others on their path to mastering the art
                of coding.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
                Whether you&apos;re just starting out or looking to sharpen your
                skills, you&apos;ll find a variety of resources and insights
                here. Let&apos;s explore the world of programming together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
