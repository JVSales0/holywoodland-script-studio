
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Edit, Save, Film, Plus, Trash2, User, MessageSquare } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SceneEditor from "../components/screenplay/SceneEditor";
import CharacterList from "../components/screenplay/CharacterList";
import ScriptOverview from "../components/screenplay/ScriptOverview";
import { toast } from "@/components/ui/use-toast";

// Mock data for screenplay
const initialScript = {
  title: "Sem título",
  synopsis: "Adicione uma sinopse para o seu roteiro...",
  genre: "Drama",
  scriptType: "original",
  scenes: [
    {
      id: "scene1",
      title: "CENA 1",
      location: "INTERIOR - SALA DE ESTAR - NOITE",
      description: "A sala está vazia, apenas com a luz da lua entrando pela janela. MARIA (30) entra lentamente.",
      dialogues: [
        {
          character: "MARIA",
          text: "Achei que você já tinha ido embora.",
        },
        {
          character: "JOÃO",
          text: "Eu não conseguiria ir sem me despedir.",
        },
      ],
    },
  ],
  characters: [
    {
      id: "char1",
      name: "MARIA",
      age: "30",
      description: "Protagonista, determinada e misteriosa",
      actor: null,
    },
    {
      id: "char2",
      name: "JOÃO",
      age: "35",
      description: "Coadjuvante, romântico e inseguro",
      actor: null,
    },
  ],
};

const Editor = () => {
  const [script, setScript] = useState(initialScript);
  const [currentSceneId, setCurrentSceneId] = useState("scene1");

  const handleScriptUpdate = (field, value) => {
    setScript({
      ...script,
      [field]: value,
    });
  };

  const handleSceneUpdate = (sceneId, field, value) => {
    setScript({
      ...script,
      scenes: script.scenes.map((scene) => 
        scene.id === sceneId ? { ...scene, [field]: value } : scene
      )
    });
  };

  const handleAddScene = () => {
    const newSceneId = `scene${script.scenes.length + 1}`;
    const newScene = {
      id: newSceneId,
      title: `CENA ${script.scenes.length + 1}`,
      location: "INTERIOR/EXTERIOR - LOCAL - DIA/NOITE",
      description: "Descrição da cena...",
      dialogues: [],
    };

    setScript({
      ...script,
      scenes: [...script.scenes, newScene],
    });
    
    setCurrentSceneId(newSceneId);
    toast({
      title: "Nova cena adicionada",
      description: `Cena ${script.scenes.length + 1} foi adicionada ao roteiro.`,
    });
  };

  const handleDeleteScene = (sceneId) => {
    if (script.scenes.length <= 1) {
      toast({
        title: "Operação não permitida",
        description: "Um roteiro precisa ter pelo menos uma cena.",
        variant: "destructive",
      });
      return;
    }

    setScript({
      ...script,
      scenes: script.scenes.filter((scene) => scene.id !== sceneId),
    });

    if (currentSceneId === sceneId) {
      setCurrentSceneId(script.scenes[0].id);
    }

    toast({
      title: "Cena removida",
      description: "A cena foi removida do roteiro.",
    });
  };

  const handleSaveScript = () => {
    // In a real app, this would save to a database
    toast({
      title: "Roteiro salvo com sucesso!",
      description: "Todas as alterações foram salvas.",
    });
  };

  const currentScene = script.scenes.find(scene => scene.id === currentSceneId) || script.scenes[0];

  return (
    <div className="min-h-screen bg-hollywood-black text-white film-grain">
      <Navbar />
      
      <div className="vignette">
        <section className="py-10">
          <div className="container mx-auto px-4 md:px-6">
            {/* Script Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div className="flex-grow">
                <div className="flex items-center space-x-2 mb-1">
                  <input
                    type="text"
                    value={script.title}
                    onChange={(e) => handleScriptUpdate("title", e.target.value)}
                    placeholder="Título do roteiro"
                    className="bg-transparent text-3xl md:text-4xl font-bold focus:outline-none focus:ring-1 focus:ring-hollywood-gold/50 rounded px-2 w-full"
                  />
                  <Edit className="h-5 w-5 text-white/40" />
                </div>
                <div className="flex flex-wrap items-center text-white/70 text-sm space-x-4">
                  <select 
                    value={script.genre}
                    onChange={(e) => handleScriptUpdate("genre", e.target.value)}
                    className="bg-muted/30 border border-white/10 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-hollywood-gold/50"
                  >
                    <option value="Ação">Ação</option>
                    <option value="Drama">Drama</option>
                    <option value="Comédia">Comédia</option>
                    <option value="Terror">Terror</option>
                    <option value="Ficção Científica">Ficção Científica</option>
                    <option value="Romance">Romance</option>
                    <option value="Suspense">Suspense</option>
                    <option value="Fantasia">Fantasia</option>
                  </select>
                  <select 
                    value={script.scriptType}
                    onChange={(e) => handleScriptUpdate("scriptType", e.target.value)}
                    className="bg-muted/30 border border-white/10 rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-hollywood-gold/50"
                  >
                    <option value="original">Original</option>
                    <option value="adaptation">Adaptação</option>
                    <option value="fanfilm">Fanfilm</option>
                  </select>
                </div>
              </div>
              
              <Button 
                onClick={handleSaveScript}
                className="mt-4 md:mt-0 bg-hollywood-gold hover:bg-hollywood-gold/90 text-hollywood-black flex items-center"
              >
                <Save className="mr-2 h-4 w-4" />
                Salvar Roteiro
              </Button>
            </div>
            
            {/* Synopsis */}
            <div className="bg-muted/30 rounded-lg p-4 mb-8">
              <label className="text-sm text-white/60 mb-1 block">Sinopse</label>
              <textarea
                value={script.synopsis}
                onChange={(e) => handleScriptUpdate("synopsis", e.target.value)}
                placeholder="Escreva uma breve sinopse do seu roteiro..."
                className="w-full bg-transparent border border-white/10 rounded-md py-2 px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-hollywood-gold/50 resize-none min-h-[80px]"
              />
            </div>

            {/* Tab Navigation */}
            <Tabs defaultValue="scenes" className="mb-10">
              <TabsList className="bg-muted/30 border border-white/10">
                <TabsTrigger value="scenes" className="data-[state=active]:bg-hollywood-gold data-[state=active]:text-hollywood-black">
                  <Film className="mr-2 h-4 w-4" />
                  Cenas
                </TabsTrigger>
                <TabsTrigger value="characters" className="data-[state=active]:bg-hollywood-gold data-[state=active]:text-hollywood-black">
                  <User className="mr-2 h-4 w-4" />
                  Personagens
                </TabsTrigger>
                <TabsTrigger value="preview" className="data-[state=active]:bg-hollywood-gold data-[state=active]:text-hollywood-black">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Visualização
                </TabsTrigger>
              </TabsList>

              {/* Scenes Tab */}
              <TabsContent value="scenes" className="mt-4">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Scene Selector */}
                  <div className="lg:col-span-1 bg-muted/20 rounded-lg border border-white/10 p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Cenas</h3>
                      <Button 
                        size="sm" 
                        onClick={handleAddScene}
                        className="bg-white/10 hover:bg-white/20 text-white"
                      >
                        <Plus className="h-4 w-4 mr-1" /> Nova
                      </Button>
                    </div>
                    
                    <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
                      {script.scenes.map((scene) => (
                        <div 
                          key={scene.id}
                          onClick={() => setCurrentSceneId(scene.id)}
                          className={`p-3 rounded-md cursor-pointer flex justify-between items-center ${
                            currentSceneId === scene.id ? 'bg-white/20 border border-hollywood-gold/50' : 'bg-white/5 hover:bg-white/10'
                          }`}
                        >
                          <div>
                            <h4 className="font-medium">{scene.title}</h4>
                            <p className="text-xs text-white/60 truncate max-w-[180px]">{scene.location}</p>
                          </div>
                          {currentSceneId === scene.id && (
                            <Button 
                              size="sm" 
                              variant="ghost" 
                              onClick={() => handleDeleteScene(scene.id)}
                              className="text-white/70 hover:text-white hover:bg-white/10 h-8 w-8 p-0"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Scene Editor */}
                  <div className="lg:col-span-3">
                    <SceneEditor 
                      scene={currentScene} 
                      characters={script.characters}
                      onUpdate={(field, value) => handleSceneUpdate(currentScene.id, field, value)} 
                    />
                  </div>
                </div>
              </TabsContent>

              {/* Characters Tab */}
              <TabsContent value="characters" className="mt-4">
                <CharacterList 
                  characters={script.characters}
                  onChange={(characters) => handleScriptUpdate("characters", characters)}
                />
              </TabsContent>

              {/* Preview Tab */}
              <TabsContent value="preview" className="mt-4">
                <ScriptOverview script={script} />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Editor;
