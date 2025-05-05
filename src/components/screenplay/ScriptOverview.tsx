
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Share2 } from "lucide-react";

const ScriptOverview = ({ script }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Script Info */}
      <div className="md:col-span-1">
        <div className="bg-muted/20 rounded-lg border border-white/10 p-5 sticky top-4">
          <h3 className="text-xl font-bold mb-3">{script.title}</h3>
          <div className="space-y-3">
            <div>
              <h4 className="text-sm text-white/60 mb-1">Gênero</h4>
              <p className="text-white/90">{script.genre}</p>
            </div>
            <div>
              <h4 className="text-sm text-white/60 mb-1">Tipo</h4>
              <p className="text-white/90">
                {script.scriptType === "original"
                  ? "Original"
                  : script.scriptType === "adaptation"
                  ? "Adaptação"
                  : "Fanfilm"}
              </p>
            </div>
            <div>
              <h4 className="text-sm text-white/60 mb-1">Cenas</h4>
              <p className="text-white/90">{script.scenes.length}</p>
            </div>
            <div>
              <h4 className="text-sm text-white/60 mb-1">Personagens</h4>
              <p className="text-white/90">{script.characters.length}</p>
            </div>
            <div className="pt-3">
              <Button
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10 mb-2"
              >
                <Download className="mr-2 h-4 w-4" />
                Exportar PDF
              </Button>
              <Button
                variant="outline"
                className="w-full border-white/20 text-white hover:bg-white/10"
              >
                <Share2 className="mr-2 h-4 w-4" />
                Compartilhar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Script Content */}
      <div className="md:col-span-3">
        <div className="bg-muted/20 rounded-lg border border-white/10 p-5">
          <div className="space-y-14 font-mono text-base leading-relaxed max-w-3xl mx-auto">
            {/* Title Page */}
            <div className="text-center pt-6 pb-10">
              <h1 className="text-3xl font-bold mb-16">{script.title.toUpperCase()}</h1>
              <p className="mb-16">por</p>
              <p className="mb-16">Seu Nome</p>
              <p className="text-sm text-white/70">
                {new Date().toLocaleDateString('pt-BR')}
              </p>
            </div>

            {/* Sinopse */}
            <div className="mb-12">
              <h2 className="text-lg font-bold mb-4 text-center">SINOPSE</h2>
              <p className="text-white/90 text-justify">{script.synopsis}</p>
            </div>

            {/* Scenes */}
            <div className="space-y-10">
              {script.scenes.map((scene) => (
                <div key={scene.id} className="space-y-4">
                  <h3 className="font-bold">{scene.title}</h3>
                  <p className="text-white/90">{scene.location}</p>
                  <p className="text-white/90 text-justify">{scene.description}</p>

                  {/* Dialogues */}
                  {scene.dialogues.length > 0 && (
                    <div className="space-y-6 pl-12 mt-6">
                      {scene.dialogues.map((dialogue, index) => (
                        <div key={index} className="space-y-1">
                          <p className="font-bold">{dialogue.character}</p>
                          <p className="text-white/90 pl-6">{dialogue.text}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScriptOverview;
