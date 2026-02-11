
import React from 'react';

const Assessment: React.FC = () => {
  return (
    <div className="h-full flex overflow-hidden animate-in fade-in duration-500">
      {/* Left Panel: Artifact Viewer */}
      <section className="flex-1 bg-slate-100 dark:bg-[#101622] overflow-y-auto p-8 relative flex flex-col items-center custom-scrollbar">
        {/* Viewer Controls */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white dark:bg-[#1a202c] shadow-lg rounded-full px-4 py-2 flex items-center gap-4 z-10 border border-slate-200 dark:border-slate-700">
          <button className="text-slate-500 hover:text-primary"><span className="material-icons text-lg">zoom_out</span></button>
          <span className="text-xs font-mono font-medium text-slate-600 dark:text-slate-300">100%</span>
          <button className="text-slate-500 hover:text-primary"><span className="material-icons text-lg">zoom_in</span></button>
          <div className="w-px h-4 bg-slate-200 dark:bg-slate-600"></div>
          <button className="text-slate-500 hover:text-primary"><span className="material-icons text-lg">file_download</span></button>
        </div>
        
        {/* Document Simulation */}
        <div className="w-full max-w-4xl bg-white dark:bg-[#1e2532] min-h-[1200px] shadow-xl rounded-sm p-12 sm:p-16 text-slate-800 dark:text-slate-300 leading-relaxed border border-slate-200 dark:border-slate-700">
          <div className="mb-12 border-b border-slate-100 dark:border-slate-700 pb-8">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">Reflecting on Global Leadership</h2>
            <p className="text-sm text-slate-500 italic">Submitted on Oct 14, 2023 at 11:45 PM</p>
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Introduction</h3>
          <p className="mb-6">
            Throughout my tenure in the Senior Experience program, I have encountered numerous challenges that have tested my ability to adapt and lead in diverse environments. My project, focused on sustainable water filtration in rural communities, required not just technical engineering skills, but a deep appreciation for cross-cultural communication. As noted by Smith (2020), "leadership is contextual," and nowhere was this more evident than in our fieldwork in Guatemala.
          </p>
          
          <div className="my-8 p-6 bg-slate-50 dark:bg-slate-800 rounded-lg border-l-4 border-primary">
            <p className="italic text-slate-600 dark:text-slate-400">
              "True leadership isn't about imposing a will, but about creating a shared vision that resonates with the values of the community you serve."
            </p>
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Methodology & Adaptability</h3>
          <p className="mb-6">
            We utilized a mixed-methods approach to gather feedback. Surveys were distributed to 50 households, and semi-structured interviews were conducted with key community leaders. The quantitative data revealed a 95% satisfaction rate with the water quality, but the qualitative interviews highlighted concerns about maintenance costs.
          </p>
          
          <div className="w-full h-64 bg-slate-100 dark:bg-slate-800 rounded-lg mb-8 relative overflow-hidden group">
            <img 
              alt="Field team" 
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" 
              src="https://picsum.photos/seed/field-team/800/400"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-white text-sm font-medium">Figure 1: Field team analyzing survey data.</p>
            </div>
          </div>
          
          <p className="mb-6">
            Addressing these concerns required an innovative financing model. We proposed a micro-subscription service managed by a local cooperative, which would cover maintenance expenses. This solution was well-received and is currently being piloted. This experience taught me that engineering problems are often, at their core, human problems.
          </p>
        </div>
        <div className="h-20 w-full shrink-0"></div>
      </section>

      {/* Right Panel: Grading Tools */}
      <aside className="w-[450px] bg-white dark:bg-[#151b26] border-l border-slate-200 dark:border-slate-700 flex flex-col shadow-2xl relative z-20">
        <div className="p-5 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Rubric Assessment</h2>
            <span className="bg-blue-100 dark:bg-blue-900 text-primary dark:text-blue-300 text-xs font-bold px-2 py-1 rounded">100 Points Total</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-1">
            <div className="bg-primary h-2 rounded-full" style={{width: '65%'}}></div>
          </div>
          <p className="text-xs text-right text-slate-500">Score: 65/100</p>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-8 custom-scrollbar">
          {/* Criterion 1 */}
          <div>
            <div className="flex justify-between items-baseline mb-3">
              <h3 className="font-bold text-slate-800 dark:text-slate-200">Critical Thinking</h3>
              <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons text-lg">comment</span></button>
            </div>
            <p className="text-xs text-slate-500 mb-4 line-clamp-2">Evaluates the ability to analyze complex problems, synthesize information, and propose logical solutions.</p>
            <div className="space-y-2">
              <RubricOption label="Emerging (0-5 pts)" sub="Basic identification of the problem with limited analysis." />
              <RubricOption label="Proficient (6-8 pts)" sub="Clear analysis with relevant evidence. Solutions are logical." active />
              <RubricOption label="Expert (9-10 pts)" sub="Deep, insightful analysis. Innovative solutions demonstrating mastery." />
            </div>
          </div>

          <hr className="border-slate-200 dark:border-slate-700"/>

          {/* Criterion 2 */}
          <div>
            <div className="flex justify-between items-baseline mb-3">
              <h3 className="font-bold text-slate-800 dark:text-slate-200">Written Communication</h3>
              <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-icons text-lg">comment</span></button>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 py-2 px-3 text-xs font-medium rounded border border-slate-200 dark:border-slate-600 text-slate-500 hover:bg-slate-50">Novice</button>
              <button className="flex-1 py-2 px-3 text-xs font-medium rounded border border-slate-200 dark:border-slate-600 text-slate-500 hover:bg-slate-50">Developing</button>
              <button className="flex-1 py-2 px-3 text-xs font-medium rounded bg-primary text-white shadow-md border border-primary">Mastering</button>
            </div>
            <p className="text-xs text-slate-500 mt-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded border border-slate-100 dark:border-slate-700/50">
              <span className="font-semibold text-primary">Mastering:</span> Writing is compelling, error-free, and perfectly structured for the intended audience.
            </p>
          </div>

          <hr className="border-slate-200 dark:border-slate-700"/>

          {/* Passport Integration */}
          <div className="bg-gradient-to-br from-[#135bec]/10 to-transparent border border-primary/20 rounded-xl p-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-10">
              <span className="material-icons text-6xl text-primary">public</span>
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-icons text-primary text-sm">verified</span>
                <h3 className="text-xs font-bold uppercase tracking-wider text-primary">Passport Validation</h3>
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-1">Global Leadership Badge</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">Verify completion of the intercultural fieldwork requirement.</p>
              <label className="inline-flex items-center cursor-pointer group">
                <input className="sr-only peer" type="checkbox" />
                <div className="relative w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                <span className="ms-3 text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-primary transition-colors">Award Credit</span>
              </label>
            </div>
          </div>

          {/* Qualitative Feedback */}
          <div>
            <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-3">Overall Feedback</h3>
            <div className="relative">
              <textarea 
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 rounded-lg p-3 text-sm text-slate-700 dark:text-slate-300 focus:ring-2 focus:ring-primary min-h-[120px]" 
                placeholder="Enter qualitative feedback here..."
                defaultValue="Alex, this is a strong reflection. Your analysis of the methodology needs slightly more depth in the second paragraph."
              ></textarea>
              <div className="absolute bottom-2 right-2 flex gap-1">
                <button className="p-1 text-slate-400 hover:text-primary rounded hover:bg-slate-200 dark:hover:bg-slate-700"><span className="material-icons text-sm">mic</span></button>
                <button className="p-1 text-slate-400 hover:text-primary rounded hover:bg-slate-200 dark:hover:bg-slate-700"><span className="material-icons text-sm">attach_file</span></button>
              </div>
            </div>
          </div>
          <div className="h-10"></div>
        </div>

        {/* Sticky Footer */}
        <div className="p-5 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-[#151b26] z-30">
          <div className="flex items-center justify-between gap-4">
            <button className="flex-1 py-2.5 px-4 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-50 transition-colors text-sm">
              Save Draft
            </button>
            <button className="flex-1 py-2.5 px-4 rounded-lg bg-primary hover:bg-blue-700 text-white font-medium shadow-lg shadow-blue-500/30 transition-all text-sm flex justify-center items-center gap-2">
              <span>Submit Grade</span>
              <span className="material-icons text-sm">send</span>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

const RubricOption = ({ label, sub, active }: any) => (
  <label className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
    active ? 'border-primary bg-primary/5 dark:bg-primary/10' : 'border-transparent hover:border-slate-200 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800'
  }`}>
    <input checked={active} className="mt-1 text-primary focus:ring-primary border-slate-300 bg-transparent" name="criterion" type="radio" readOnly />
    <div>
      {/* Fix: Added missing 'className' attribute */}
      <span className={`block text-sm font-semibold ${active ? 'text-primary dark:text-blue-300' : 'text-slate-700 dark:text-slate-300'}`}>{label}</span>
      <span className="block text-xs text-slate-500 mt-1">{sub}</span>
    </div>
  </label>
);

export default Assessment;
