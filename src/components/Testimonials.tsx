
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-earth-50 to-forest-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-forest-800 mb-4">
            Resultados que hablan por sí solos
          </h2>
          <p className="text-lg text-coffee-600 max-w-2xl mx-auto">
            Empresas líderes ya están transformando sus operaciones con Sumaq Tree
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 relative">
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-forest-600 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="pt-6">
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <blockquote className="text-xl lg:text-2xl text-coffee-800 leading-relaxed mb-8 italic">
                "Gracias a Sumaq Tree, logramos reducir en un 20% el uso de agua
                en nuestras fincas y estamos en proceso de obtener la
                certificación Rainforest Alliance. Es una inversión que genera
                impacto y rentabilidad."
              </blockquote>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-forest-200 to-coffee-200 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-forest-700">RG</span>
                </div>
                <div>
                  <div className="font-semibold text-forest-800 text-lg">
                    Rosa Gutiérrez
                  </div>
                  <div className="text-coffee-600">
                    Gerente de Producción
                  </div>
                  <div className="text-coffee-500 text-sm">
                    Agroexportadora El Bosque
                  </div>
                </div>
              </div>
            </div>

            {/* Estadísticas de impacto */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-earth-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-forest-600 mb-2">20%</div>
                <div className="text-coffee-600">Reducción uso de agua</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-forest-600 mb-2">15%</div>
                <div className="text-coffee-600">Aumento productividad</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-forest-600 mb-2">95%</div>
                <div className="text-coffee-600">Precisión en datos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
