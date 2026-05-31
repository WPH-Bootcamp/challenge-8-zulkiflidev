import { smartITSolutions } from '../../data/smartItSolutions'
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';


// Fungsi dinamis untuk resolve path gambar di Vite
function getImageUrl(iconName: string) {
  return new URL(`../../assets/SmartItSolutions/${iconName}.png`, import.meta.url).href;
}

function SmartItSolutions() {
  return (
    <div>
        <SectionHeader
          title="Smart IT Solutions That Grow With You"
          subtitle="Tailored tech to boost efficiency, security, and results."
          className="my-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 py-4 lg:grid-cols-3 gap-2 md:gap-8 mt-8 md:mt-12 max-w-6xl mx-auto">
          {/* 4 item di dalam grid */}
          
          {smartITSolutions.map((item, index) => (
            <Card 
              key={index}
              variant="smart"
              title={item.title}
              description={item.description}
              icon={getImageUrl(item.icon)}
            />
          ))}

        </div>
        <br/>
        <br/>
        <br/>


    </div>
  )
}

export default SmartItSolutions