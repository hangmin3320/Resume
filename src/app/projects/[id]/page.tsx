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
    date: "2023년 6월 - 2023년 12월",
    role: "프론트엔드 개발자",
    github: "https://github.com/username/project1",
    liveDemo: "https://project1-demo.com"
  },
  {
    id: '2',
    title: "프로젝트 2",
    description: "프로젝트에 대한 간단한 설명",
    detailedDescription: `
      이 프로젝트는 데이터 분석 및 보고서 생성을 자동화하기 위해 개발되었습니다.
      사용자가 데이터를 업로드하면 AI 알고리즘을 통해 자동으로 분석하고 인사이트를 제공합니다.
      
      주요 도전 과제는 다음과 같았습니다:
      1. 복잡한 데이터 처리 알고리즘 구현
      2. 사용자 친화적인 인터페이스 설계
      3. 서버 성능 최적화
      
      이 프로젝트를 통해 데이터 처리 및 AI 관련 기술력을 크게 향상시켰습니다.
    `,
    technologies: ["Vue.js", "Express", "PostgreSQL"],
    features: [
      "AI 기반 데이터 분석",
      "커스텀 보고서 생성",
      "데이터 시각화 대시보드",
      "파일 업로드 및 관리",
      "다양한 포맷의 내보내기 기능"
    ],
    date: "2022년 10월 - 2023년 4월",
    role: "풀스택 개발자",
    github: "https://github.com/username/project2",
    liveDemo: "https://project2-demo.com"
  }
];

// 프로젝트 ID로 프로젝트 정보 찾기
function getProjectById(id: string) {
  return projects.find(project => project.id === id);
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = getProjectById(params.id);
  
  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">프로젝트를 찾을 수 없습니다</h1>
          <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">
            ← 모든 프로젝트 보기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <Link href="/projects" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-4 inline-block">
          ← 모든 프로젝트 보기
        </Link>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-300">
          <div className="h-72 bg-gray-300 dark:bg-gray-700 flex items-center justify-center transition-colors duration-300">
            <svg className="w-32 h-32 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
            </svg>
          </div>
          
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm transition-colors duration-300">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">기간</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.date}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">역할</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.role}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">링크</h3>
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">GitHub</a>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">Live Demo</a>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">프로젝트 개요</h2>
              <div className="prose max-w-none text-gray-700 dark:text-gray-300">
                <p className="whitespace-pre-line">{project.detailedDescription}</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">주요 기능</h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 