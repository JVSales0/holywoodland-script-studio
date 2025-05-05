
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const SceneEditor = ({ scene, characters, onUpdate }) => {
  const [newDialogueCharacter, setNewDialogueCharacter] = useState("");
  const [newDialogueText, setNewDialogueText] = useState("");

  const handleAddDialogue = () => {
    if (!newDialogueCharacter || !newDialogueText) {
      toast({
        title: "Campos incompletos",
        description: "Personagem e diálogo são obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    const updatedDialogues = [
      ...scene.dialogues,
      {
        character: newDialogueCharacter,
        text: newDialogueText,
      },
    ];

    onUpdate("dialogues", updatedDialogues);
    setNewDialogueCharacter("");
    setNewDialogueText("");
    
    toast({
      title: "Diálogo adicionado",
      description: `Diálogo para ${newDialogueCharacter} adicionado com sucesso.`,
    });
  };

  const handleRemoveDialogue = (index) => {
    const updatedDialogues = scene.dialogues.filter((_, i) => i !== index);
    onUpdate("dialogues", updatedDialogues);
    
    toast({
      title: "Diálogo removido",
      description: "O diálogo foi removido da cena.",
    });
  };

  return (
    <div className="bg-muted/20 rounded-lg border border-white/10 p-6">
      <div className="space-y-5">
        {/* Scene Title */}
        <div>
          <label className="text-sm text-white/60 mb-1 block">Título da Cena</label>
          <input
            type="text"
            value={scene.title}
            onChange={(e) => onUpdate("title", e.target.value)}
            className="w-full bg-muted/30 border border-white/10 rounded-md py-2 px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-hollywood-gold/50"
          />
        </div>
        
        {/* Location */}
        <div>
          <label className="text-sm text-white/60 mb-1 block">Local (INT./EXT. - LUGAR - TEMPO)</label>
          <input
            type="text"
            value={scene.location}
            onChange={(e) => onUpdate("location", e.target.value)}
            className="w-full bg-muted/30 border border-white/10 rounded-md py-2 px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-hollywood-gold/50"
            placeholder="INTERIOR - SALA - DIA"
          />
        </div>
        
        {/* Description */}
        <div>
          <label className="text-sm text-white/60 mb-1 block">Descrição da Cena</label>
          <textarea
            value={scene.description}
            onChange={(e) => onUpdate("description", e.target.value)}
            className="w-full bg-muted/30 border border-white/10 rounded-md py-2 px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-hollywood-gold/50 resize-none min-h-[120px]"
            placeholder="Descreva o que acontece na cena..."
          />
        </div>
        
        {/* Dialogues */}
        <div>
          <label className="text-sm text-white/60 mb-1 block">Diálogos</label>
          
          {scene.dialogues.length > 0 ? (
            <div className="mb-4 space-y-3">
              {scene.dialogues.map((dialogue, index) => (
                <div key={index} className="bg-white/5 rounded-md p-3 relative group">
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleRemoveDialogue(index)}
                      className="text-white/70 hover:text-white hover:bg-white/10 h-8 w-8 p-0"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="font-semibold mb-1">{dialogue.character}</div>
                  <div className="text-white/90 italic">{dialogue.text}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white/5 rounded-md p-4 text-center text-white/50 mb-4">
              Nenhum diálogo adicionado a esta cena.
            </div>
          )}
          
          {/* Add new dialogue */}
          <div className="bg-white/10 rounded-md p-4">
            <h4 className="text-sm font-semibold mb-3">Adicionar Diálogo</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3">
              <div className="md:col-span-1">
                <select
                  value={newDialogueCharacter}
                  onChange={(e) => setNewDialogueCharacter(e.target.value)}
                  className="w-full bg-muted/30 border border-white/10 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-1 focus:ring-hollywood-gold/50"
                >
                  <option value="">Personagem</option>
                  {characters.map((char) => (
                    <option key={char.id} value={char.name}>
                      {char.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="md:col-span-3">
                <input
                  type="text"
                  value={newDialogueText}
                  onChange={(e) => setNewDialogueText(e.target.value)}
                  placeholder="Digite o diálogo..."
                  className="w-full bg-muted/30 border border-white/10 rounded-md py-2 px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-hollywood-gold/50"
                />
              </div>
            </div>
            
            <Button 
              onClick={handleAddDialogue}
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10"
            >
              <Plus className="mr-1 h-4 w-4" />
              Adicionar Diálogo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SceneEditor;
