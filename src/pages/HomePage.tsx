import React from 'react';
import { Play, FileText, Clock, FileCheck, RotateCcw, FileBarChart2 } from 'lucide-react';

const features = [
  { icon: Play, label: 'Live Classes', tag: 'FREE' },
  { icon: FileText, label: 'Live Test & Quizzes' },
  { icon: Clock, label: 'Free Quizzes', tag: 'NEW' },
  { icon: FileCheck, label: 'Prev. Year Papers' },
  { icon: RotateCcw, label: 'Practice' },
  { icon: FileBarChart2, label: 'GK & CA' }
];

const testSeries = [
  {
    title: 'SSC Reasoning PYP Mock Test Series (20k+ Questions)',
    progress: '196/1514',
    percentage: '13%',
    students: '1280.2k',
    image: '/ssc-logo.png'
  },
  {
    title: 'SSC CGL (Tier I & Tier II) Mock Test 2024',
    progress: '119/1749',
    percentage: '7%',
    students: '1666.0k',
    image: '/ssc-logo.png'
  },
  {
    title: 'General Science for All Railway Exams Previous Year Paper Mock Test',
    progress: '4/341',
    percentage: '1%',
    students: '403.1k',
    image: '/railway-logo.png'
  }
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <img src="/testbook-logo.png" alt="Testbook" className="h-8" />
            <input
              type="search"
              placeholder="Search"
              className="w-96 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>
          <button className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600">
            Pro
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Feature Icons */}
        <div className="grid grid-cols-6 gap-4 mb-12">
          {features.map((Feature, index) => (
            <button
              key={index}
              className="flex flex-col items-center p-4 rounded-xl hover:bg-white hover:shadow-md transition-all"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 
                ${index === 0 ? 'bg-red-100' : 
                  index === 1 ? 'bg-green-100' : 
                  index === 2 ? 'bg-purple-100' : 
                  index === 3 ? 'bg-orange-100' : 
                  index === 4 ? 'bg-pink-100' : 'bg-blue-100'}`}>
                <Feature.icon className={`w-6 h-6 
                  ${index === 0 ? 'text-red-500' : 
                    index === 1 ? 'text-green-500' : 
                    index === 2 ? 'text-purple-500' : 
                    index === 3 ? 'text-orange-500' : 
                    index === 4 ? 'text-pink-500' : 'text-blue-500'}`} />
              </div>
              <span className="text-sm text-gray-700">{Feature.label}</span>
              {features[index].tag && (
                <span className={`text-xs px-2 py-1 rounded-full mt-1 
                  ${features[index].tag === 'FREE' ? 'bg-green-500 text-white' : 
                    'bg-orange-500 text-white'}`}>
                  {features[index].tag}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Recent Test Series */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Your Recent Test Series</h2>
            <div className="flex space-x-2">
              <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                <RotateCcw className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center">
                →
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {testSeries.map((series, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start space-x-4 mb-4">
                  <img src={series.image} alt="" className="w-12 h-12 rounded-full" />
                  <div className="flex-1">
                    <h3 className="font-medium text-sm mb-2">{series.title}</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">{series.progress}</span>
                      <div className="flex-1 h-1 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-cyan-500 rounded-full"
                          style={{ width: series.percentage }}
                        ></div>
                      </div>
                      <span className="text-xs text-gray-500">{series.percentage}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    👥 {series.students} Students
                  </span>
                  <button className="px-4 py-2 bg-cyan-500 text-white rounded-lg text-sm">
                    Go To Test Series
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;