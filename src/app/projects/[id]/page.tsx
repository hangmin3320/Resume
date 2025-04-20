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
