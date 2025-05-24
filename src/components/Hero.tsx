
import { Button } from "@/components/ui/button";
import { Leaf, Smartphone, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-forest-50 via-earth-50 to-coffee-50 flex items-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenido Principal */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-forest-800 leading-tight">
                Transforma tu{" "}
                <span className="text-forest-600">agroexportadora</span> con
                tecnología sostenible
              </h1>
              <p className="text-lg lg:text-xl text-coffee-700 leading-relaxed max-w-2xl">
                Sumaq Tree es una solución integral que combina sensores
                ambientales con análisis inteligente de datos para ayudarte a
                cumplir con estándares internacionales, optimizar recursos y
                facilitar certificaciones sostenibles.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Solicita una demo personalizada
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-forest-600 text-forest-600 hover:bg-forest-50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                Conoce cómo optimizar en 5 minutos
              </Button>
            </div>

            {/* Beneficios Rápidos */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-forest-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-forest-800">
                    Reduce costos
                  </h3>
                  <p className="text-sm text-coffee-600">Hasta 20% menos agua</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-forest-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-forest-800">Certifica</h3>
                  <p className="text-sm text-coffee-600">
                    Estándares internacionales
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-forest-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-forest-800">Monitorea</h3>
                  <p className="text-sm text-coffee-600">En tiempo real</p>
                </div>
              </div>
            </div>
          </div>

          {/* Imagen Visual */}
          <div className="relative animate-slide-up">
            <div className="bg-gradient-to-br from-forest-100 to-coffee-100 rounded-2xl p-8 shadow-2xl">
              <div className="space-y-6">
                {/* Simulación de Dashboard */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-forest-800 mb-4">
                    Dashboard en Tiempo Real
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-forest-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-forest-600">
                        85%
                      </div>
                      <div className="text-sm text-coffee-600">
                        Humedad del suelo
                      </div>
                    </div>
                    <div className="bg-coffee-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-coffee-600">
                        22°C
                      </div>
                      <div className="text-sm text-coffee-600">Temperatura</div>
                    </div>
                    <div className="bg-earth-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-earth-600">
                        20%
                      </div>
                      <div className="text-sm text-coffee-600">
                        Ahorro de agua
                      </div>
                    </div>
                    <div className="bg-forest-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-forest-600">
                        CO₂
                      </div>
                      <div className="text-sm text-coffee-600">
                        Reducción huella
                      </div>
                    </div>
                  </div>
                </div>

                {/* Simulación de Sensores */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-forest-800 mb-4">
                    Sensores Activos
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-coffee-600">Sensor 1 - Sector A</span>
                      <div className="w-3 h-3 bg-forest-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-coffee-600">Sensor 2 - Sector B</span>
                      <div className="w-3 h-3 bg-forest-400 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-coffee-600">Sensor 3 - Sector C</span>
                      <div className="w-3 h-3 bg-forest-400 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
