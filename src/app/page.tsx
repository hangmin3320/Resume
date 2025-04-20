'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// 프로젝트 샘플 데이터
const projects = [
  {
    id: '1',
    title: "Image & Story Generator",
    description: "API를 사용한 Image To Text, Story Generator",
    technologies: ["python", "RestAPI", "Flask", "OpenAI API", "HTML", "CSS", "JavaScript", "Postman Agent" ,"Few-Show", "Learning"],
  },
  {
    id: '2',
    title: "Car Classification Model (for PyTorch)",
    description: "PyTorch를 활용한 자동차 분류 모델",
    technologies: ["Classification", "10-classes", "PyTorch", "DeepLearning", "Wide_ResNet", "GradCAM", "Confusion Matrix"],
  },
  {
    id: '3',
    title: "AIIA-GPT (ChatBot for AIIA)",
    description: "동아리를 위한 챗봇",
    technologies: ["OpenAI API", "Flask", "Prompt Engineering", "Docker", "CD", "GitHub Actions"],
  },
];

// 기술 데이터
const skills = {
  used: [
    { name: "Python" },
    { name: "PyTorch" },
    { name: "DeepLearning (CNN)" },
    { name: "FastAPI" },
    { name: "Git" },
    { name: "GitHub Actions" },
  ],
  interested: [
    { name: "LLM" },
    { name: "Docker" },
    { name: "Backend" },
    { name: "Django" },
  ],
};

export default function Home() {
  const pathname = usePathname();
  // Determine if we're in production by checking if pathname starts with '/Resume'
  const isProduction = process.env.NODE_ENV === 'production';
  const basePath = isProduction ? '/Resume' : '';
  const imagePath = `${basePath}/images/croppedProfile.jpg`;

  return (
    <div>
      {/* 홈 섹션 */}
      <section id="home" className="min-h-screen flex items-center pb-16 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 dark:gradient-bg gradient-bg-light opacity-30"></div>
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-slow"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-20 z-10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-slide-up">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                <span className="gradient-text">인공지능 개발자</span>
                <br />조항민입니다.
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 font-light">
                AI Researcher
              </p>
              <p className="text-gray-700 dark:text-gray-400 mb-8 leading-relaxed">
                우리가 평소에 사용하고 있는 사소한 서비스와 제품들에도 인공지능이 담겨있다는 사실을 아시나요?<br/>
                이처럼 사람들의 삶 속에 스며들 수 있는 인공지능을 개발하고 배포하는 것을 목표로 하는 개발자입니다.<br/>
                때론 단순 재미를 위한 서비스들을 만들지만, 이것이 인공지능과 사람이 더욱 가까워질 수 있는 길이라고 믿습니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#about" className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  더 알아보기
                </a>
                <a href="#contact" className="glass px-6 py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  연락하기
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center animate-fade-in">
              <div className="w-64 h-64 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 animate-pulse-slow"></div>
                <div className="absolute inset-2 glass rounded-full overflow-hidden flex items-center justify-center">
                  <Image 
                    src={imagePath}
                    alt="Profile Image"
                    width={200}
                    height={200}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 소개 섹션 */}
      <section id="about" className="min-h-screen py-20 relative">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white dark:bg-gray-800"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-blue-100 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-100 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 relative inline-block">
            <span className="relative z-10">About Me</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                경력
              </h3>
              <div className="space-y-6">
                <div className="card-hover glass p-6 rounded-xl">
                  <div className="flex items-start">
                    <div className="flex-grow">
                      <h4 className="text-xl font-medium text-gray-900 dark:text-white">가천대학교 교내 자율동아리 AIIA</h4>
                      <p className="text-gray-600 dark:text-gray-300">AI R&D Unit Leader</p>
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mt-2">
                        2024.03 - 진행중
                      </div>
                      <ul className="mt-4 space-y-2">
                        {['PyTorch를 사용한 Deep Learning 모델 다수 구현', 'Car Classification Model 개발 (10-classes)', 'AIIA-GPT ChatBot 개발', 'Chill-Guy Meme Generator 백엔드 개발'].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                            <span className="text-gray-700 dark:text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6"></div>
              <div className="space-y-6">
                <div className="card-hover glass p-6 rounded-xl">
                  <div className="flex items-start">
                    <div className="flex-grow">
                      <h4 className="text-xl font-medium text-gray-900 dark:text-white">휴몬랩 코딩 아카데미</h4>
                      <p className="text-gray-600 dark:text-gray-300">Educator</p>
                      <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mt-2">
                        2024.07 - 2024.09
                      </div>
                      <ul className="mt-4 space-y-2">
                        {['Orange 3를 활용해 데이터분석 시작하기', '앱인벤터로 나만의 앱 제작하기'].map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                            <span className="text-gray-700 dark:text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                  </svg>
                </span>
                학력
              </h3>
              <div className="space-y-6">
                <div className="card-hover glass p-6 rounded-xl">
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white">가천대학교</h4>
                  <p className="text-gray-600 dark:text-gray-300">AI·소프트웨어학부/인공지능전공</p>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 mt-2">
                    2024.03 - 진행중
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-500 dark:text-purple-400 mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">교내 자율동아리 AIIA 소속</span>
                    </li>
                  </ul>
                </div>
                <div className="card-hover glass p-6 rounded-xl">
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white">천안신당고등학교</h4>
                  <p className="text-gray-600 dark:text-gray-300">과학중점반 (2학년 - 3학년)</p>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mt-2">
                    2022 - 2023
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-500 dark:text-purple-400 mr-2">•</span>
                      <span className="text-gray-700 dark:text-gray-300">교과 우수상 (정보)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
              <span className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </span>
              Experience
            </h3>
            <div className="card-hover glass p-8 rounded-xl">
              <ul className="space-y-3">
                {[
                  '(2025.02.27) AIIA PRIME Coffee Chat 주최 & 인솔자 참여',
                  <span key="ai-show">(2024.06.19-21) <a href="https://smarttechkorea.com/aibigdatashow" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">AI BigData Show</a> 참여</span>,
                  '축구선수 유망주 예측 대회 참여 (DACON)',
                  '신약 개발 경진대회 참여 (DACON)'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-indigo-500 dark:text-indigo-400 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 기술 섹션 */}
      <section id="skills" className="min-h-screen py-20 relative">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900"></div>
          <div className="absolute top-40 left-20 w-80 h-80 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 relative inline-block">
            <span className="relative z-10">Skills</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </span>
                이런 기술을 사용했어요
              </h3>
              <div className="glass p-6 rounded-xl">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skills.used.map((skill, index) => (
                    <div 
                      key={index} 
                      className="card-hover p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 flex items-center justify-center transform transition-all duration-300"
                      style={{ animationDelay: `${0.1 * index}s` }}
                    >
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </span>
                이런 기술에도 관심있어요
              </h3>
              <div className="glass p-6 rounded-xl">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skills.interested.map((skill, index) => (
                    <div 
                      key={index} 
                      className="card-hover p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 flex items-center justify-center transform transition-all duration-300"
                      style={{ animationDelay: `${0.1 * index}s` }}
                    >
                      <span className="text-gray-800 dark:text-gray-200 font-medium text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 프로젝트 섹션 */}
      <section id="projects" className="min-h-screen py-20 relative">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-white dark:bg-gray-800"></div>
          <div className="absolute top-40 right-20 w-80 h-80 bg-blue-100 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-100 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 relative inline-block">
            <span className="relative z-10">Projects</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="card-hover glass rounded-xl overflow-hidden animate-fade-in"
                style={{ animationDelay: `${0.15 * index}s` }}
              >
                <div className="h-48 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 dark:from-blue-500/20 dark:to-purple-600/20"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-20 h-20 text-gray-500/70 dark:text-gray-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-100/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium transition-all duration-300">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium group"
                  >
                    자세히 보기
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Link 
              href="/projects" 
              className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
            >
              모든 프로젝트 보기
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 연락처 섹션 */}
      <section id="contact" className="min-h-screen py-20 relative">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900"></div>
          <div className="absolute top-40 left-20 w-80 h-80 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 relative inline-block">
            <span className="relative z-10">Contact</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  연락처 정보
                </h3>
                <div className="space-y-6">
                  <div className="card-hover p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 flex items-center transform transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">이메일</div>
                      <a href="mailto:hangmin3320@daum.net" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">hangmin3320@daum.net</a>
                    </div>
                  </div>

                  <div className="card-hover p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 flex items-center transform transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">전화번호</div>
                      <a href="tel:010-3491-6878" className="text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors">010-3491-6878</a>
                    </div>
                  </div>

                  <div className="card-hover p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 flex items-center transform transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">위치</div>
                      <span className="text-gray-800 dark:text-gray-200">충청남도 천안시 서북구</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="glass p-8 rounded-xl">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </span>
                  소셜 미디어
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a 
                    href="https://github.com/hangmin3320" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="card-hover p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 flex items-center transform transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900/30 flex items-center justify-center mr-4 group-hover:bg-gray-200 dark:group-hover:bg-gray-700/50 transition-colors">
                      <svg className="w-5 h-5 text-gray-800 dark:text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">GitHub</div>
                      <span className="text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">hangmin3320</span>
                    </div>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/hangmin3320" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="card-hover p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 flex items-center transform transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                      <svg className="w-5 h-5 text-blue-700 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</div>
                      <span className="text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">hangmin3320</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 gradient-bg dark:opacity-90 opacity-95"></div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-white mb-2 gradient-text">조항민</h2>
              <p className="text-gray-300 text-sm">인공지능 개발자 & AI Researcher</p>
            </div>

            <div className="flex space-x-6">
              <a 
                href="https://github.com/hangmin3320" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/hangmin3320" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="mailto:hangmin3320@daum.net" 
                className="text-gray-300 hover:text-white transition-colors duration-300"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} 조항민. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#home" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">홈</a>
              <a href="#about" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">소개</a>
              <a href="#skills" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">기술</a>
              <a href="#projects" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">프로젝트</a>
              <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">연락처</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
} 
