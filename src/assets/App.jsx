import Sidebar from "../components/Sidebar"
import ChatWidget from "../components/ChatWidget"
import Section from "../components/Section"
import ZoneCard from "../components/ZoneCard";

const App = () => {
    const year = new Date().getFullYear();

    return (
        <div className="relative min-h-screen w-full">

            {/* Sidebar */}
            <Sidebar/>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-6">
                    <h1 className="text-2xl md:text-4xl font-bold">
                        Snoozeville Safety & Patrol Layout
                    </h1>
                    <p className="text-gray-500">
                        Public Municipal Safety Report
                    </p>
                </header>

                <Section id="executive" title="Executive Summary">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab officiis, eligendi repellendus quibusdam vel esse repellat, aliquam consectetur cum earum facere debitis distinctio vitae quae quaerat amet pariatur eum itaque soluta provident error impedit nulla, inventore tempore. Quod eligendi quia asperiores cum nobis, fuga porro, aliquid consequuntur, sequi nisi a deleniti minus impedit recusandae. Reiciendis dolores dicta assumenda nulla modi in recusandae odit, laboriosam odio!</p>
                </Section>

                <Section id="zones" title="Patrol Zones">
                    <div className="grid md:grid-cols-2 gap-4">
                        <ZoneCard title="West District" subtitle="Schools & Cafes"/>
                        <ZoneCard title="East District" subtitle="Transit & Hospitals"/>
                    </div>
                </Section>
                
                <Section id="staffing" title="Staffing Overview">
                    <div className="overflow-x-auto rounded">
                        <table className="w-full bg-white border">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-2 border">Role</th>
                                    <th className="p-2 border">Personel</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2 border">Patrol Officers</td>
                                    <td className="p-2 border">84</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border">Supervisors</td>
                                    <td className="p-2 border">12</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border">Community Liaisons</td>
                                    <td className="p-2 border">13</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border">Dispatch Operators</td>
                                    <td className="p-2 border">20</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Section>

                <Section id="workflow" title="Response Workflow">
                    <p className="text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quo:</p>
                      <div className="space-y-2 mt-4">
                        {[
                        "1. Incident Reported",
                        "2. Dispatch Verification",
                        "3. Patrol Assignment",
                        "4. On-Site Resolution",
                        "5. Documentation"
                        ].map((step, index) => (
                        <div key={index} className="text-left bg-gray-100 p-3 rounded">
                            {step}
                        </div>
                        ))}
                    </div>
                </Section>

                <Section id="programs" title="Community Programs">
                    <p className="text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quo:</p>
                    <ul className="mt-4 bg-gray-100 rounded overflow-hidden">
                        {[
                            "A. Lorem ipsum dolor",
                            "B. Quibusdam quisquam",
                            "C. Corrupti eius ut eaque odio",
                            "D. Ipsam sint assumenda, praesentium",
                            "E. Nobis exercitationem explicabo"
                        ].map((program, index) => (
                            <li key={index} className="text-left p-3 border-b last:border-b-0">
                                {program}
                            </li>
                        ))}
                    </ul>
                </Section>

                <Section id="demo" title="Video Demo">
                    <div className="relative w-full pb-[56.25%]">
                        <iframe
                        src="https://www.youtube.com/embed/94_ilMVpy6Y"
                        title="Demo Video"
                        className="absolute top-0 left-0 w-full h-full rounded"
                        allowFullScreen
                        />
                    </div>
                </Section>

                <Section id="print to PDF" title="Printable PDF Version">
                    <button 
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        onClick={() => {window.print()}}
                    >
                        Print / Save as PDF
                    </button>
                </Section>

                <Section id="contact" title="Contact Information">
                    <p>Email: this@Snoozeville.ca</p>
                    <p>Phone: (222) 123-4567</p>
                </Section>

                <footer className="text-center text-gray-500 mt-10">
                    &copy; {year} The Metropolitan City of Snoozeville
                </footer>
            </main>
            <ChatWidget />
        </div>
    )
}

export default App;