import Link from 'next/link';

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
  return (
    <div>
      {/* 홈 섹션 */}
      <section id="home" className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center pb-16 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                인공지능 개발자 조항민입니다.
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                AI Researcher
              </p>
              <p className="text-gray-700 dark:text-gray-400 mb-8">
                우리가 평소에 사용하고 있는 사소한 서비스와 제품들에도 인공지능이 담겨있다는 사실을 아시나요?<br/>
                이처럼 사람들의 삶 속에 스며들 수 있는 인공지능을 개발하고 배포하는 것을 목표로 하는 개발자입니다.<br/>
                때론 단순 재미를 위한 서비스들을 만들지만, 이것이 인공지능과 사람이 더욱 가까워질 수 있는 길이라고 믿습니다.
              </p>
              <div className="flex space-x-4">
                <a href="#about" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  더 알아보기
                </a>
                <a href="#contact" className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-2 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300">
                  연락하기
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="w-64 h-64 mx-auto rounded-full overflow-hidden bg-gray-300 dark:bg-gray-700 flex items-center justify-center transition-colors duration-300">
                <svg className="w-32 h-32 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 소개 섹션 */}
      <section id="about" className="min-h-screen bg-white dark:bg-gray-800 py-20 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">About Me</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">경력</h3>
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-colors duration-300">
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white">가천대학교 교내 자율동아리 AIIA</h4>
                  <p className="text-gray-600 dark:text-gray-300">AI R&D Unit Leader</p>
                  <p className="text-gray-500 dark:text-gray-400">2024.03 - 진행중</p>
                  <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>PyTorch를 사용한 Deep Learning 모델 다수 구현</li>
                    <li>Car Classification Model 개발 (10-classes)</li>
                    <li>AIIA-GPT ChatBot 개발</li>
                    <li>Chill-Guy Meme Generator 백엔드 개발</li>
                  </ul>
                </div>
              </div>
              <div className="pt-10"></div>
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-colors duration-300">
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white">휴몬랩 코딩 아카데미</h4>
                  <p className="text-gray-600 dark:text-gray-300">Educator</p>
                  <p className="text-gray-500 dark:text-gray-400">2024.07 - 2024.09</p>
                  <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>Orange 3를 활용해 데이터분석 시작하기</li>
                    <li>앱인벤터로 나만의 앱 제작하기</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">학력</h3>
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-colors duration-300">
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white">가천대학교</h4>
                  <p className="text-gray-600 dark:text-gray-300">AI·소프트웨어학부/인공지능전공</p>
                  <p className="text-gray-500 dark:text-gray-400">2024.03 - 진행중</p>
                  <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>교내 자율동아리 AIIA 소속</li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md transition-colors duration-300">
                  <h4 className="text-xl font-medium text-gray-900 dark:text-white">천안신당고등학교</h4>
                  <p className="text-gray-600 dark:text-gray-300">과학중점반 (2학년 - 3학년)</p>
                  <p className="text-gray-500 dark:text-gray-400">2022 - 2023</p>
                  <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>교과 우수상 (정보)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Experience</h3>
            <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md transition-colors duration-300">
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                <li>(2025.02.27) AIIA PRIME Coffee Chat 주최 & 인솔자 참여</li>
                <li>(2024.06.19-21) <a href="https://smarttechkorea.com/aibigdatashow" target="_blank" rel="noopener noreferrer">AI BigData Show</a> 참여</li>
                <li>축구선수 유망주 예측 대회 참여 (DACON)</li>
                <li>신약 개발 경진대회 참여 (DACON)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 기술 섹션 */}
      <section id="skills" className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Skills</h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">이런 기술을 사용했어요</h3>
              <div className="space-y-4">
                {skills.used.map((skill, index) => (
                  <div key={index} className="py-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">이런 기술에도 관심있어요</h3>
              <div className="space-y-4">
                {skills.interested.map((skill, index) => (
                  <div key={index} className="py-1">
                    <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 프로젝트 섹션 */}
      <section id="projects" className="min-h-screen bg-white dark:bg-gray-800 py-20 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md overflow-hidden transition-colors duration-300">
                <div className="h-48 bg-gray-300 dark:bg-gray-600 flex items-center justify-center transition-colors duration-300">
                  <svg className="w-20 h-20 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                  >
                    자세히 보기 →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link 
              href="/projects" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block"
            >
              모든 프로젝트 보기
            </Link>
          </div>
        </div>
      </section>

      {/* 연락처 섹션 */}
      <section id="contact" className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Contact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">연락처 정보</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-600 dark:text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">hangmin3320@daum.net</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-600 dark:text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">010-3491-6878</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-600 dark:text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">충청남도 천안시 서북구</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">소셜 미디어</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/hangmin3320" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/hangmin3320" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} [조항민]. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
} 
