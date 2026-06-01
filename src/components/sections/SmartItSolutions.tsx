import { smartITSolutions } from '../../data/smartItSolutions'
import Card from '../ui/Card';
import SectionHeader from '../ui/SectionHeader';
import { getImageUrl } from '../../utils/helpers';

function SmartItSolutions() {
  return (
    <div>
        <SectionHeader
          title="Smart IT Solutions That Grow With You"
          subtitle="Tailored tech to boost efficiency, security, and results."
          className="my-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 py-4 lg:grid-cols-3 gap-2 
                        md:gap-8 mt-8 md:mt-12 max-w-6xl mx-auto">
          {smartITSolutions.map((item, index) => (
            <Card 
              key={index}
              variant="smart"
              title={item.title}
              description={item.description}
              icon={getImageUrl('SmartItSolutions', item.icon)}
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