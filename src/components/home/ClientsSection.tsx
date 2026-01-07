import { Building, GraduationCap, Briefcase, Users } from 'lucide-react';

const stats = [
  { icon: Building, value: '500+', label: 'Instituții Dotate' },
  { icon: GraduationCap, value: '200+', label: 'Școli & Grădinițe' },
  { icon: Briefcase, value: '150+', label: 'Companii & Birouri' },
  { icon: Users, value: '50,000+', label: 'Elevi Fericiți' },
];

const clients = [
  'Ministerul Educației',
  'Primăria Chișinău',
  'Universitatea de Stat',
  'Orange Moldova',
  'Victoriabank',
  'Moldtelecom',
  'MAIB',
  'Kaufland',
];

export function ClientsSection() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-primary-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-primary-foreground/10 mb-16" />

        {/* Clients */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-8">
            Ne-au acordat încrederea:
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {clients.map((client) => (
              <span
                key={client}
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors text-lg font-medium"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
