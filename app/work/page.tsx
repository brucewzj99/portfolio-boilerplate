'use client';
import profileData from '../../data/profile.json';
import { ProfileData, WorkExperience } from '../types';

export default function Work() {
  const { workExperience, theme } = profileData as ProfileData;
  const { backgroundColor, textColor, secondaryColor } = theme;
  const workEx: WorkExperience[] = workExperience || [];

  // Separate the first work experience and the rest
  const [firstJob, ...otherJobs] = workEx;

  return (
    <div
      className="relative max-w-7xl mx-auto p-8"
      style={{ backgroundColor, color: textColor }}
    >
      <h1 className="text-3xl font-bold mb-8">Work Experiences</h1>
      {/* Render the first (latest) job centered with no timeline marker */}
      {firstJob && (
        <div className="flex flex-col items-center">
          {/* Work Info centered */}
          <div
            className="mt-4 w-full max-w-xl px-4 py-2 border rounded-lg shadow-md"
            style={{
              border: `1px solid ${textColor}`,
              backgroundColor: 'transparent'
            }}
          >
            <h3 className="text-xl font-semibold" style={{ color: textColor }}>
              {firstJob.role}
            </h3>
            <h4 className="text-lg" style={{ color: textColor }}>
              {firstJob.company}
            </h4>
            <p className="text-sm" style={{ color: textColor }}>
              {firstJob.duration}
            </p>
            <p className="mt-2 text-md" style={{ color: textColor }}>
              {firstJob.description}
            </p>
          </div>
        </div>
      )}

      {/* Container for other jobs with timeline line starting at the top of this block */}
      <div className="relative">
        {/* Vertical Timeline Line */}
        <div
          className="absolute left-1/2 top-0 w-px h-full"
          style={{ backgroundColor: textColor, opacity: 0.5 }}
        ></div>

        {otherJobs.map((work: WorkExperience, idx: number) => {
          // Calculate index relative to original array
          const originalIndex = idx + 1;
          const isLeft = originalIndex % 2 === 0;

          if (isLeft) {
            return (
              <div key={originalIndex} className="grid grid-cols-9 items-center mb-8">
                {/* Work Info on Left */}
                <div className="col-span-4 flex justify-end mt-8">
                  <div
                    className="w-full px-4 py-2 border rounded-lg shadow-md"
                    style={{
                      border: `1px solid ${textColor}`,
                      backgroundColor: 'transparent'
                    }}
                  >
                    <h3 className="text-xl font-semibold" style={{ color: textColor }}>
                      {work.role}
                    </h3>
                    <h4 className="text-lg" style={{ color: textColor }}>
                      {work.company}
                    </h4>
                    <p className="text-sm" style={{ color: textColor }}>
                      {work.duration}
                    </p>
                    <p className="mt-2 text-md" style={{ color: textColor }}>
                      {work.description}
                    </p>
                  </div>
                </div>
                {/* Timeline Marker */}
                <div className="col-span-1 flex justify-center mt-8">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: secondaryColor }}
                  ></div>
                </div>
                {/* Empty right column */}
                <div className="col-span-4"></div>
              </div>
            );
          } else {
            return (
              <div key={originalIndex} className="grid grid-cols-9 items-center mb-8">
                {/* Empty left column */}
                <div className="col-span-4"></div>
                {/* Timeline Marker */}
                <div className="col-span-1 flex justify-center mt-8">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: secondaryColor }}
                  ></div>
                </div>
                {/* Work Info on Right */}
                <div className="col-span-4 flex justify-start mt-8">
                  <div
                    className="w-full px-4 py-2 border rounded-lg shadow-md"
                    style={{
                      border: `1px solid ${textColor}`,
                      backgroundColor: 'transparent'
                    }}
                  >
                    <h3 className="text-xl font-semibold" style={{ color: textColor }}>
                      {work.role}
                    </h3>
                    <h4 className="text-lg" style={{ color: textColor }}>
                      {work.company}
                    </h4>
                    <p className="text-sm" style={{ color: textColor }}>
                      {work.duration}
                    </p>
                    <p className="mt-2 text-md" style={{ color: textColor }}>
                      {work.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}