import Link from 'next/link';

// 프로젝트 목록 데이터 (실제로는 데이터베이스나 API에서 가져올 수 있음)
const projects = [
  {
    id: '1',
    title: "Image & Story Generator",
    description: "API를 사용한 Image To Text, Story Generator",
    detailedDescription: `
      해당 프로젝트는 고등학교 3학년 여름방학에 제작한 저의 첫 프로젝트입니다.

      사용자는 웹페이지에 여러 단어를 입력할 수 있으며, 입력된 단어를 기반으로 이미지와 간단한 이야기를 생성받을 수 있습니다. 

      프로젝트 제작 당시 ChatGPT는 Dall-E를 바로 호출해 이미지를 생성하는 기능이 없었기 때문에, ChatGPT로 이야기를 만든 후 해당 이야기를 Dall-E 요청으로 넘겨 이미지를 생성하는 방식을 채택했습니다.
    `,
    technologies: ["python", "RestAPI", "Flask", "OpenAI API", "HTML", "CSS", "JavaScript", "Postman Agent" ,"Few-Show", "Learning"],
    features: [
      "Flask를 통한 OpenAI API 활용",
      "RestfulAPI 채택",
      "Few-Shot Learning 기법을 사용해 언어모델 Fine-Tuning",
      "Postman Agent 활용으로 교내 네트워크를 통해 접속할 수 있도록 서비스 배포"
    ],
    date: "2023년 8월",
    role: "프론트엔드 & 백엔드 개발자",
    github: "https://github.com/hangmin3320/FirstProject",
    liveDemo: "https://project1-demo.com"
  },
  {
    id: '2',
    title: "Car Classification Model (for PyTorch)",
    description: "PyTorch를 활용한 자동차 분류 모델",
    detailedDescription: `
      가천대학교 교내 자율동아리 AIIA에서 진행한 첫 개인 프로젝트입니다.
      PyTorch 패키지를 사용해 Neural Net을 직접 구현하였고, 크고작은 오류들을 겪으면서 저를 크게 성장시켜준 프로젝트입니다.
      총 10개의 자동차 모델을 분류하도록 모델링 하였으며 Colab 무료 리소스를 사용해 학습을 진행하였습니다.
    `,
    technologies: ["Classification", "10-classes", "PyTorch", "DeepLearning", "Wide_ResNet", "GradCAM", "Confusion Matrix"],
    features: [
      "국소적 특징을 추출하는 Wide-ResNet 채택",
      "Feature Map을 추출해 모델의 집중도를 확인하는 GradCAM 사용",
      "Class별 정답/오답률을 확인할 수 있는 Confusion Matrix 시각화",
      "직접 제작한 크롤링 툴을 사용해 Dataset 구축"
    ],
    date: "2024년 6월 - 2024년 7월",
    role: "AI 개발자",
    github: "https://github.com/hangmin3320/AIIA_AFAC",
    liveDemo: "https://car-classification-demo.com"
  },
  {
    id: '3',
    title: "AIIA-GPT (ChatBot for AIIA)",
    description: "동아리를 위한 챗봇",
    detailedDescription: `
      가천대학교 교내 자율동아리 AIIA의 챗봇입니다.
      동아리에서 진행한 첫 협업 프로젝트이기 때문에 작은 부분부터 시작하기로 하였습니다.

      챗봇을 만들기 위한 Fine-tuning과 CD 파이프라인 구축/간단한 Docker 개념을 익히게 되었습니다.

      해당 서비스는 사용자들에게 동아리 정보(인원, 운영방식, 부서 등)을 제공할 수 있으며
      동아리의 운영진에게 직접 문의를 하고 답변을 받는 시간의 텀을 없애기 위해 제작하였습니다.
    `,
    technologies: ["OpenAI API", "Flask", "Prompt Engineering", "Docker", "CD", "GitHub Actions"],
    features: [
      "OpenAI API 채택 → Fine-tuning을 통해 동아리 전용 챗봇으로 학습",
      "Docker를 사용한 배포",
      "GitHub Actions CD 파이프라인 구축"
    ],
    date: "2024년 12월 - 2025년 1월",
    role: "AI 개발자 & CD 파이프라인 구축",
    github: "https://github.com/hangmin3320/AIIA-GPT",
    liveDemo: "https://aiia-gpt-demo.com"
  }
];

// 프로젝트 ID로 프로젝트 정보 찾기
function getProjectById(id: string) {
  return projects.find(project => project.id === id);
}

// 정적 생성을 위한 경로 매개변수 생성
export function generateStaticParams() {
  return projects.map(project => ({
    id: project.id
  }));
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);

  if (!project) {
    return (
      <div className="min-h-screen py-20 relative">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900"></div>
          <div className="absolute top-40 left-20 w-80 h-80 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="glass p-10 rounded-xl text-center animate-fade-in">
            <svg className="w-24 h-24 text-gray-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">프로젝트를 찾을 수 없습니다</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">요청하신 프로젝트가 존재하지 않거나 삭제되었을 수 있습니다.</p>
            <Link 
              href="/projects" 
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              모든 프로젝트 보기
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gray-50 dark:bg-gray-900"></div>
        <div className="absolute top-40 left-20 w-80 h-80 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <Link 
          href="/projects" 
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-8 group animate-fade-in"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-2 transform transition-transform duration-300 group-hover:-translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          모든 프로젝트 보기
        </Link>

        <div className="card-hover glass rounded-xl overflow-hidden animate-fade-in">
          <div className="h-72 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 dark:from-blue-500/20 dark:to-purple-600/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-32 h-32 text-gray-500/70 dark:text-gray-400/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
              </svg>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
              <span className="gradient-text">{project.title}</span>
            </h1>

            <div className="flex flex-wrap gap-2 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {project.technologies.map((tech, index) => (
                <span 
                  key={index} 
                  className="bg-gray-100/80 dark:bg-gray-700/80 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="card-hover p-4 rounded-lg bg-white/50 dark:bg-gray-800/50">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  기간
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{project.date}</p>
              </div>
              <div className="card-hover p-4 rounded-lg bg-white/50 dark:bg-gray-800/50">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 flex items-center">
                  <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  역할
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{project.role}</p>
              </div>
              <div className="card-hover p-4 rounded-lg bg-white/50 dark:bg-gray-800/50">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2 flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  링크
                </h3>
                <div className="flex space-x-4">
                  {project.id !== '3' ? (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 group"
                    >
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-3 w-3 ml-1 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y--1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  ) : (
                    <a 
                      href="https://gpt.aiia-gcu.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 group"
                    >
                      서비스 바로가기
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-3 w-3 ml-1 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y--1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="mb-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 relative inline-block">
                <span className="relative z-10">프로젝트 개요</span>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
              </h2>
              <div className="prose max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="whitespace-pre-line">{project.detailedDescription}</p>
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 relative inline-block">
                <span className="relative z-10">주요 기능</span>
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
              </h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
