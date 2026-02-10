'use client';
import { useState } from 'react';
import { COURSES } from '@/data/education';
import { FaPlay, FaCheck, FaTimes, FaGraduationCap } from 'react-icons/fa';

export default function EducationPage() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="space-y-8 animate-[slideUp_0.5s_ease-out] relative">
      
      {/* 🌟 Ambient Background Glow */}
      <div className="fixed top-20 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 mb-6 text-blue-400">
          <FaGraduationCap className="text-3xl" />
        </div>
        <h1 className="text-4xl font-bold mb-3 tracking-tight">Trader's Academy</h1>
        <p className="text-trade-muted text-lg">Master the markets with our comprehensive, institutional-grade curriculum.</p>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {COURSES.map((course) => (
          <div key={course.id} className="glass-panel overflow-hidden rounded-3xl flex flex-col group hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300">
            
            {/* Thumbnail Area */}
            <div 
              className="h-48 relative cursor-pointer overflow-hidden"
              onClick={() => setSelectedVideo(course.videoId)}
            >
              {/* Image */}
              <img 
                src={`https://img.youtube.com/vi/${course.videoId}/hqdefault.jpg`} 
                alt={course.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-trade-card via-trade-card/20 to-transparent"></div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-xl hover:scale-110 transition-transform">
                  <FaPlay className="text-white ml-1 text-xl" />
                </button>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-3 right-3 text-xs font-bold bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg text-white border border-white/10">
                {course.duration}
              </div>
            </div>
            
            {/* Content Area */}
            <div className="p-6 flex-1 flex flex-col relative bg-trade-card/50">
              <div className="flex justify-between items-start mb-3">
                <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-lg border ${
                  course.level === 'Beginner' ? 'bg-green-500/10 text-green-400 border-green-500/20' :
                  course.level === 'Intermediate' ? 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' :
                  'bg-red-500/10 text-red-400 border-red-500/20'
                }`}>
                  {course.level}
                </span>
                {course.progress === 100 && (
                  <div className="bg-trade-success/20 p-1 rounded-full text-trade-success">
                    <FaCheck className="text-xs" />
                  </div>
                )}
              </div>
              
              <h3 className="font-bold text-lg mb-4 leading-snug text-white group-hover:text-trade-primary transition-colors">
                {course.title}
              </h3>
              
              {/* Progress Section */}
              <div className="mt-auto">
                <div className="flex justify-between text-xs font-medium text-trade-muted mb-2">
                  <span>Progress</span>
                  <span className={course.progress === 100 ? 'text-trade-success' : 'text-white'}>{course.progress}%</span>
                </div>
                <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden border border-white/5">
                  <div 
                    className={`h-full transition-all duration-1000 ${course.progress === 100 ? 'bg-trade-success' : 'bg-trade-primary'}`} 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
              
              <button 
                onClick={() => setSelectedVideo(course.videoId)}
                className="w-full mt-6 border border-trade-border bg-transparent hover:bg-trade-primary hover:border-trade-primary hover:text-white text-trade-muted py-3 rounded-xl text-sm font-bold transition-all active:scale-95"
              >
                {course.progress > 0 ? 'Continue Lesson' : 'Start Course'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 🎬 PREMIUM VIDEO MODAL */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md animate-[fadeIn_0.3s_ease-out]"
            onClick={() => setSelectedVideo(null)}
          ></div>

          {/* Player Container */}
          <div className="w-full max-w-5xl bg-black rounded-3xl overflow-hidden relative shadow-2xl shadow-blue-900/20 border border-trade-border animate-[scaleUp_0.3s_ease-out]">
            
            {/* Close Button */}
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-20 group bg-black/50 hover:bg-red-500/80 backdrop-blur-md text-white p-3 rounded-full transition-all border border-white/10"
            >
              <FaTimes className="text-lg group-hover:rotate-90 transition-transform" />
            </button>

            {/* YouTube Embed */}
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0&modestbranding=1`}
                title="Course Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}