export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">경력</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-gray-900">회사명</h3>
                <p className="text-gray-600">직책</p>
                <p className="text-gray-500">기간</p>
                <ul className="mt-4 list-disc list-inside text-gray-700">
                  <li>주요 업무 1</li>
                  <li>주요 업무 2</li>
                  <li>주요 업무 3</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">학력</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-medium text-gray-900">학교명</h3>
                <p className="text-gray-600">전공</p>
                <p className="text-gray-500">기간</p>
                <ul className="mt-4 list-disc list-inside text-gray-700">
                  <li>주요 활동 1</li>
                  <li>주요 활동 2</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">자기소개</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-700 leading-relaxed">
              여기에 자신에 대한 상세한 소개를 작성해주세요. 
              개발자로서의 철학, 관심사, 목표 등을 포함하여 
              자신을 잘 표현할 수 있는 내용을 작성하면 좋습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 