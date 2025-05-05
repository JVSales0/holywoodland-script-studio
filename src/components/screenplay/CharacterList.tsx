
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Edit, Plus, Search, Trash2, User } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const CharacterList = ({ characters, onChange }) => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingCharacterId, setEditingCharacterId] = useState(null);
  const [newCharacter, setNewCharacter] = useState({
    name: "",
    age: "",
    description: "",
  });

  const handleAddCharacter = () => {
    if (!newCharacter.name) {
      toast({
        title: "Nome obrigatório",
        description: "Por favor, insira um nome para o personagem.",
        variant: "destructive",
      });
      return;
    }

    const characterId = `char${characters.length + 1}`;
    const updatedCharacters = [
      ...characters,
      {
        id: characterId,
        ...newCharacter,
        actor: null,
      },
    ];

    onChange(updatedCharacters);
    setNewCharacter({ name: "", age: "", description: "" });
    setShowAddForm(false);
    
    toast({
      title: "Personagem adicionado",
      description: `${newCharacter.name} foi adicionado ao roteiro.`,
    });
  };

  const handleUpdateCharacter = (characterId) => {
    const updatedCharacters = characters.map((character) =>
      character.id === characterId
        ? { ...character, ...newCharacter }
        : character
    );

    onChange(updatedCharacters);
    setNewCharacter({ name: "", age: "", description: "" });
    setEditingCharacterId(null);
    
    toast({
      title: "Personagem atualizado",
      description: `${newCharacter.name} foi atualizado com sucesso.`,
    });
  };

  const handleDeleteCharacter = (characterId) => {
    const updatedCharacters = characters.filter(
      (character) => character.id !== characterId
    );

    onChange(updatedCharacters);
    
    toast({
      title: "Personagem removido",
      description: "O personagem foi removido do roteiro.",
    });
  };

  const handleEditCharacter = (character) => {
    setNewCharacter({
      name: character.name,
      age: character.age,
      description: character.description,
    });
    setEditingCharacterId(character.id);
    setShowAddForm(true);
  };

  const handleCancelEdit = () => {
    setNewCharacter({ name: "", age: "", description: "" });
    setEditingCharacterId(null);
    setShowAddForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <h3 className="text-xl font-bold mb-2 sm:mb-0">
          Personagens ({characters.length})
        </h3>

        {!showAddForm && (
          <Button
            onClick={() => setShowAddForm(true)}
            className="bg-hollywood-gold hover:bg-hollywood-gold/90 text-hollywood-black"
          >
            <Plus className="mr-2 h-4 w-4" />
            Novo Personagem
          </Button>
        )}
      </div>

      {showAddForm && (
        <div className="bg-muted/20 rounded-lg border border-white/10 p-5">
          <h4 className="text-lg font-semibold mb-4">
            {editingCharacterId ? "Editar Personagem" : "Adicionar Personagem"}
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm text-white/60 mb-1 block">
                Nome do Personagem *
              </label>
              <input
                type="text"
                value={newCharacter.name}
                onChange={(e) =>
                  setNewCharacter({ ...newCharacter, name: e.target.value })
                }
                placeholder="Ex: MARIA SILVA"
                className="w-full bg-muted/30 border border-white/10 rounded-md py-2 px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-hollywood-gold/50"
              />
            </div>
            <div>
              <label className="text-sm text-white/60 mb-1 block">Idade</label>
              <input
                type="text"
                value={newCharacter.age}
                onChange={(e) =>
                  setNewCharacter({ ...newCharacter, age: e.target.value })
                }
                placeholder="Ex: 30 ou 30-35"
                className="w-full bg-muted/30 border border-white/10 rounded-md py-2 px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-hollywood-gold/50"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="text-sm text-white/60 mb-1 block">
              Descrição do Personagem
            </label>
            <textarea
              value={newCharacter.description}
              onChange={(e) =>
                setNewCharacter({ ...newCharacter, description: e.target.value })
              }
              placeholder="Descreva o personagem, sua personalidade, aparência..."
              className="w-full bg-muted/30 border border-white/10 rounded-md py-2 px-4 text-white placeholder:text-white/40 focus:outline-none focus:ring-1 focus:ring-hollywood-gold/50 resize-none min-h-[100px]"
            />
          </div>

          <div className="flex space-x-3">
            {editingCharacterId ? (
              <>
                <Button
                  onClick={() => handleUpdateCharacter(editingCharacterId)}
                  className="bg-hollywood-gold hover:bg-hollywood-gold/90 text-hollywood-black"
                >
                  Atualizar Personagem
                </Button>
                <Button
                  onClick={handleCancelEdit}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Cancelar
                </Button>
              </>
            ) : (
              <>
                <Button
                  onClick={handleAddCharacter}
                  className="bg-hollywood-gold hover:bg-hollywood-gold/90 text-hollywood-black"
                >
                  Adicionar Personagem
                </Button>
                <Button
                  onClick={() => setShowAddForm(false)}
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Cancelar
                </Button>
              </>
            )}
          </div>
        </div>
      )}

      {!showAddForm && (
        <div>
          {characters.length === 0 ? (
            <div className="text-center py-10 bg-muted/20 rounded-lg border border-white/10">
              <User className="h-12 w-12 text-white/20 mx-auto mb-3" />
              <p className="text-white/50">
                Nenhum personagem adicionado ainda.
              </p>
              <Button
                onClick={() => setShowAddForm(true)}
                variant="outline"
                className="mt-3 border-white/20 text-white hover:bg-white/10"
              >
                Adicionar personagem
              </Button>
            </div>
          ) : (
            <>
              <div className="relative mb-4">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-white/50" />
                <input
                  type="text"
                  placeholder="Buscar personagens por nome..."
                  className="w-full pl-10 bg-muted/30 border border-white/10 rounded-md py-2 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-hollywood-gold/50"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {characters.map((character) => (
                  <div
                    key={character.id}
                    className="bg-muted/20 rounded-lg border border-white/10 p-4 group hover:border-hollywood-gold/30 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-lg">{character.name}</h4>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex space-x-1">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleEditCharacter(character)}
                          className="text-white/70 hover:text-white hover:bg-white/10 h-8 w-8 p-0"
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleDeleteCharacter(character.id)}
                          className="text-white/70 hover:text-white hover:bg-white/10 h-8 w-8 p-0"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {character.age && (
                      <p className="text-white/70 text-sm mb-2">
                        Idade: {character.age}
                      </p>
                    )}

                    {character.description && (
                      <p className="text-white/80 mb-3 line-clamp-3">
                        {character.description}
                      </p>
                    )}

                    <div className="mt-2">
                      {character.actor ? (
                        <div className="flex items-center">
                          <img
                            src={character.actor.photo}
                            alt={character.actor.name}
                            className="w-8 h-8 rounded-full object-cover mr-2"
                          />
                          <span className="text-sm">
                            Ator: <span className="text-hollywood-gold">{character.actor.name}</span>
                          </span>
                        </div>
                      ) : (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-white/20 text-white hover:bg-white/10 text-xs w-full"
                        >
                          Escalar ator para este papel
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CharacterList;
