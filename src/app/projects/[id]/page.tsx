import Link from 'next/link';

// 프로젝트 목록 데이터 (실제로는 데이터베이스나 API에서 가져올 수 있음)
const projects = [
  {
    id: '1',
    title: "프로젝트 1",
    description: "프로젝트에 대한 간단한 설명",
    detailedDescription: `
      이 프로젝트는 사용자 경험을 개선하기 위해 개발되었습니다. 
      주요 기능으로는 사용자 인증, 데이터 시각화, 실시간 알림 등이 있습니다.
      
      개발 과정에서 여러 도전 과제를 해결했습니다:
      1. 대용량 데이터 처리를 위한 최적화
      2. 반응형 디자인 구현
      3. 보안 취약점 해결
      
      이 프로젝트를 통해 팀워크와 문제 해결 능력을 향상시킬 수 있었습니다.
    `,
    technologies: ["React", "Node.js", "MongoDB"],
    features: [
      "사용자 인증 및 권한 관리",
      "실시간 데이터 시각화",
      "알림 시스템",
      "반응형 디자인",
      "다국어 지원"
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