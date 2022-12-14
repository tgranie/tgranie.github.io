/**
 * Locale translations for BIMViewer
 */
const messages = {

    // English

    "en": {
        "busyModal": { // The dialog that appears in the center of the canvas while we are loading a model
            "loading": "Loading" // Loading <myModel>
        },
        "NavCube": { // The 3D navigation cube at the bottom right of the canvas
            "front": "Front",
            "back": "Back",
            "top": "Top",
            "bottom": "Bottom",
            "left": "Left",
            "right": "Right"
        },
        "modelsExplorer": { // The "Models" tab on the left of the canvas
            "title": "Models",
            "loadAll": "Load all",
            "loadAllTip": "Load all models in this project",
            "unloadAll": "Unload all",
            "unloadAllTip": "Unload all models",
            "add": "Add",
            "addTip": "Add a Model"
        },
        "objectsExplorer": { // The "Objects" tab on the left of the canvas
            "title": "Objects",
            "showAll": "Show all",
            "showAllTip": "Show all objects",
            "hideAll": "Hide all",
            "hideAllTip": "Hide all objects"
        },
        "classesExplorer": { // The "Classes" tab on the left of the canvas
            "title": "Classes",
            "showAll": "Show all",
            "showAllTip": "Show all classes",
            "hideAll": "Hide all",
            "hideAllTip": "Hide all classes"
        },
        "storeysExplorer": { // The "Storeys" tab on the left of the canvas
            "title": "Storeys",
            "showAll": "Show all",
            "showAllTip": "Show all storeys",
            "hideAll": "Hide all",
            "hideAllTip": "Hide all storeys"
        },
        "propertiesInspector": { // The "Properties" tab on the right of the canvas
            "title": "Properties",
            "noObjectSelectedWarning": "No object inspected. Right-click or long-tab an object and select \'Inspect Properties\' to view its properties here.",
            "noPropSetWarning": "No property sets found for this object."
        },
        "toolbar": { // The toolbar at the top of the canvas
            "toggleExplorer": "Toggle explorer", // Button to open or close the explorer panel on the left
            "toggleProperties": "Toggle properties", // Button to open or close the properties panel on the right
            "resetViewTip": "Reset view", // Button to reset the viewer to initial state
            "toggle2d3dTip": "Toggle 2D/3D", // Button to toggle between 3D view and 2D plan view modes
            "togglePerspectiveTip": "Toggle Perspective/Ortho", // Button to toggle between perspective and orthographic projection
            "viewFitTip": "View fit", // Button to position the camera to fit all objects in view
            "firstPersonTip": "Toggle first person navigation mode", // Button to switch between first-person and orbit navigation modes
            "hideObjectsTip": "Hide objects", // Button to activate "Hide objects" tool
            "selectObjectsTip": "Select objects", // Button to activate "Select objects" tool
            "queryObjectsTip": "Query objects", // Button to activate "Query objects" tool
            "sliceObjectsTip": "Slice objects", // Button to activate "Slice objects" tool
            "slicesMenuTip": "Slices menu", // Button to open the pull-down menu of existing section planes
            "showSpacesTip": "Show IFCSpaces", //Button to show IFC spaces
            "numSlicesTip": "Number of existing slices" // Label shows number of sexisting section planes
        },
        "canvasContextMenu": { // Context menu that appears when we right-click on empty canvas space
            "viewFitAll": "View Fit All", // Menu option to position the camera to fit all objects in view
            "hideAll": "Hide All", // Menu option to hide all objects
            "showAll": "Show All", // Menu option to show all objects
            "xRayAll": "X-Ray All", // Menu option to X-ray all objects
            "xRayNone": "X-Ray None", // Menu option to remove X-ray effect from all objects
            "selectNone": "Select None", // Menu option to clear any currently selected objects
            "resetView": "Reset View", // Menu option to reset the view to initial state
            "clearSlices": "Clear Slices" // Menu option to delete all section planes created with the Slice tool
        },
        "modelsContextMenu": { // Context menu that appears when we right-click on a model in the "Models" tab
            "loadModel": "Load",
            "unloadModel": "Unload",
            "editModel": "Edit",
            "deleteModel": "Delete",
            "loadAllModels": "Load All",
            "unloadAllModels": "Unload All",
            "clearSlices": "Clear Slices"
        },
        "objectContextMenu": { // Context menu that appears when we right-click on an object in the 3D view
            "inspectProperties": "Inspect Properties", //menu option to inspect properties in the properties inspector
            "viewFit": "View Fit", // Menu option to position the camera to fit the object in view
            "viewFitAll": "View Fit All", // Menu option to position the camera to fit all objects in view
            "showInTree": "Show in Explorer", // Menu option to show the object in the Objects tab's tree
            "hide": "Hide", // Menu option to hide this object
            "hideOthers": "Hide Others", // Menu option to hide other objects
            "hideAll": "Hide All", // Menu option to hide all objects
            "showAll": "Show All", // Menu option to show all objects
            "xray": "X-Ray", // Menu option to X-ray this object
            "xrayOthers": "X-Ray Others", // Menu option to undo X-ray on all other objects
            "xrayAll": "X-Ray All", // Menu option to X-ray all objects
            "xrayNone": "X-Ray None", // Menu option to remove X-ray effect from all objects
            "select": "Select", // Menu option to select this object
            "undoSelect": "Undo Select", // Menu option to deselect this object
            "selectNone": "Select None", // Menu option to deselect all objects
            "clearSlices": "Clear Slices" // Menu option to delete all slices made with the Slicing tool
        },
        "treeViewContextMenu": { // Context menu that appears when we right-click an object node in the tree within in the "Objects" tab
            "inspectProperties": "Inspect Properties", //menu option to inspect properties in the properties inspector
            "viewFit": "View Fit", // Menu option to position the camera to fit the object in view
            "viewFitAll": "View Fit All", // Menu option to position the camera to fit all objects in view
            "isolate": "Isolate", // Menu option to hide all other objects and fit this object in view
            "hide": "Hide", // Menu option to hide this object
            "hideOthers": "Hide Others", // Menu option to hide other objects
            "hideAll": "Hide All", // Menu option to hide all objects
            "show": "Show", // Menu option to show this object
            "showOthers": "Show Others", // Menu option to hide this object and show all others
            "showAll": "Show All", // Menu option to show all objects
            "xray": "X-Ray", // Menu option to X-ray this object
            "undoXray": "Undo X-Ray", // Menu option to undo X-ray on this object
            "xrayOthers": "X-Ray Others", // Menu option to undo X-ray on all other objects
            "xrayAll": "X-Ray All", // Menu option to X-ray all objects
            "xrayNone": "X-Ray None", // Menu option to remove X-ray effect from all objects
            "select": "Select", // Menu option to select this object
            "undoSelect": "Undo Select", // Menu option to deselect this object
            "selectNone": "Select None", // Menu option to deselect all objects
            "clearSlices": "Clear Slices" // Menu option to delete all slices made with the Slicing tool
        },
        "sectionToolContextMenu": { // Context menu that appears when we right-click an the Slicing tool
            "slice": "Slice", // Title of submenu for each slice, eg. "Slice #0, Slice #1" etc
            "clearSlices": "Clear Slices", // Menu option to delete all slices
            "flipSlices": "Flip Slices", // Menu option to reverse the cutting direction of all slices
            "edit": "Edit", // Sub-menu option to edit a single slice
            "flip": "Flip", // Sub-menu option to reverse the cutting direction of a single slice
            "delete": "Delete" // Sub-menu option to delete a single slice
        }
    },

    // German

    "de": {
        "busyModal": { // The dialog that appears in the center of the canvas while we are loading a model
            "loading": "Laden von" // Loading <myModel>
        },
        "NavCube": { // The 3D navigation cube at the bottom right of the canvas
            "front": "Vorne",
            "back": "Hinten",
            "top": "Oben",
            "bottom": "Unten",
            "left": "Links",
            "right": "Rechts"
        },
        "modelsExplorer": { // The "Models" tab on the left of the canvas
            "title": "Modelle",
            "loadAll": "Alle laden",
            "loadAllTip": "Alle Modelle in diesem Projekt laden",
            "unloadAll": "Alle abw??hlen",
            "unloadAllTip": "Alle Modelle abw??hlen",
            "add": "Hinzuf??gen",
            "addTip": "Modell hinzuf??gen"
        },
        "objectsExplorer": { // The "Objects" tab on the left of the canvas
            "title": "Objekte",
            "showAll": "Alle anzeigen",
            "showAllTip": "Alle Objekte anzeigen",
            "hideAll": "Alle ausblenden",
            "hideAllTip": "Alle Objekte ausblenden"
        },
        "classesExplorer": { // The "Classes" tab on the left of the canvas
            "title": "Typen",
            "showAll": "Alle anzeigen",
            "showAllTip": "Alle Typen anzeigen",
            "hideAll": "Alle ausblenden",
            "hideAllTip": "Alle Typen ausblenden"
        },
        "storeysExplorer": { // The "Storeys" tab on the left of the canvas
            "title": "Stockwerke",
            "showAll": "Alle anzeigen",
            "showAllTip": "Alle Stockwerke anzeigen",
            "hideAll": "Alle ausblenden",
            "hideAllTip": "Alle Stockwerke ausblenden"
        },
        "propertiesInspector": { // The "Properties" tab on the right of the canvas
            "title": "Eigenschaften",
            "noObjectSelectedWarning": "Kein Objekt inspiziert. Klicken Sie mit der rechten Maustaste auf ein Objekt oder f??hren Sie einen langen Tabulator aus und w??hlen Sie \'Eigenschaften pr??fen\', um die Eigenschaften des Objekts anzuzeigen.",
            "noPropSetWarning": "Keine Eigenschaftss??tze f??r dieses Objekt gefunden."
        },
        "toolbar": { // The toolbar at the top of the canvas
            "toggleExplorer": "Explorer ein- und ausblenden", // Button to open or close the explorer panel on the left
            "toggleProperties": "Eigenschaften ein- und ausblenden", // Button to open or close the properties panel on the right
            "resetViewTip": "Ansicht zur??cksetzen", // Button to reset the viewer to initial state
            "toggle2d3dTip": "2D/3D umschalten", // Button to toggle between 2D and 3D viewing modes
            "togglePerspectiveTip": "Orthogonale/Perspektivische Ansicht umschalten", // Buttons to toggle between orthographic and perspective projection modes
            "viewFitTip": "In Ansicht einpassen", // Button to fit everything in view
            "firstPersonTip": "Ich-Perspektive umschalten", // Button to toggle between first-person and orbiting camera navigation
            "hideObjectsTip": "Objekte ausblenden", // Button to activate/deactivate the Hide Objects tool
            "selectObjectsTip": "Objekte ausw??hlen", // Button to activate/deactivate "Select objects" tool
            "queryObjectsTip": "Abfrageobjekte", // Button to activate/deactivate "Query objects" tool
            "sliceObjectsTip": "Objekte schneiden", // Button to activate/deactivate "Slice objects" tool
            "slicesMenuTip": "Men?? Schnittebenen", // Button to open the pull-down menu of existing section planes
            "showSpacesTip": "IFC-R??ume anzeigen", //Button to show IFC spaces
            "numSlicesTip": "Anzahl der Schnittebenen" // Label shows number of existing section planes
        },
        "canvasContextMenu": { // Context menu that appears when we right-click on empty canvas space
            "viewFitAll": "In Ansicht einpassen", // Menu option to position the camera to fit all objects in view
            "hideAll": "Alle ausblenden", // Menu option to hide all objects
            "showAll": "Alle anzeigen", // Menu option to show all objects
            "xRayAll": "R??ntgenansicht (alle)", // Menu option to X-ray all objects
            "xRayNone": "R??ntgenansicht (keine)", // Menu option to remove X-ray effect from all objects
            "selectNone": "Alle abw??hlen", // Menu option to clear any currently selected objects
            "resetView": "Ansicht zur??cksetzen", // Menu option to reset the view to initial state
            "clearSlices": "Schnittebenen l??schen" // Menu option to delete all section planes created with the Slice tool
        },
        "modelsContextMenu": { // Context menu that appears when we right-click on a model in the "Models" tab
            "loadModel": "Laden", // Menu option to load a model
            "unloadModel": "Abw??hlen", // Menu option to unload a model
            "editModel": "Bearbeiten", // Menu option to edit a model (re-upload its IFC file)
            "deleteModel": "L??schen", // Menu option to delete a model
            "loadAllModels": "Alle laden", // Menu option to load all available models
            "unloadAllModels": "Alle abw??hlen", // Menu option to unload all available models
            "clearSlices": "Schnittebenen l??schen" // Menu option to delete all slices made with the Slicing tool
        },
        "objectContextMenu": { // Context menu that appears when we right-click on an object in the 3D view
            "inspectProperties": "Eigenschaften pr??fen", //menu option to inspect properties in the properties inspector
            "viewFit": "Objekt in Ansicht einpassen", // Menu option to position the camera to fit the right-clicked object in view
            "viewFitAll": "Alle in Ansicht einpassen", // Menu option to position the camera to fit all objects in view
            "showInTree": "Im Baum anzeigen", // Menu option to show the right-clicked object in the Objects tab's tree
            "hide": "Ausblenden", // Menu option to hide the right-clicked object
            "hideOthers": "Andere ausblenden", // Menu option to hide all objects except the right-clicked object
            "hideAll": "Alle ausblenden", // Menu option to hide all objects
            "showAll": "Alle anzeigen", // Menu option to show all objects
            "xray": "R??ntgenansicht", // Menu option to X-ray the right-clicked object
            "xrayOthers": "R??ntgenansicht (andere)", // Menu option to X-ray all objects except the right-clicked object
            "xrayAll": "R??ntgenansicht (alle)", // Menu option to X-ray all objects
            "xrayNone": "R??ntgenansicht (keine)",  // Menu option to undo X-ray on all objects
            "select": "Ausw??hlen",  // Menu option to select the right-clicked object
            "undoSelect": "Abw??hlen",  // Menu option to unselect the right-clicked object
            "selectNone": "Alle abw??hlen", // Menu option to unselect all objects
            "clearSlices": "Schnittebenen l??schen" // Menu option to delete all slices
        },
        "treeViewContextMenu": { // Context menu that appears when we right-click an object node in the tree within in the "Objects" tab
            "inspectProperties": "Eigenschaften pr??fen", //menu option to inspect properties in the properties inspector
            "viewFit": "Objekt in Ansicht einpassen", // Menu option to position the camera to fit the object in view
            "viewFitAll": "Alle in Ansicht einpassen", // Menu option to position the camera to fit all objects in view
            "isolate": "Isolieren", // Menu option to hide all other objects and fit this object in view
            "hide": "Ausblenden", // Menu option to hide this object
            "hideOthers": "Andere ausblenden", // Menu option to hide other objects
            "hideAll": "Alle ausblenden", // Menu option to hide all objects
            "show": "Anzeigen", // Menu option to show this object
            "showOthers": "Andere anzeigen", // Menu option to hide this object and show all others
            "showAll": "Alle anzeigen", // Menu option to show all objects
            "xray": "R??ntgenansicht", // Menu option to X-ray this object
            "undoXray": "R??ntgenansicht r??ckg??ngig machen", // Menu option to undo X-ray on this object
            "xrayOthers": "R??ntgenansicht (andere)", // Menu option to undo X-ray on all other objects
            "xrayAll": "R??ntgenansicht (alle)", // Menu option to X-ray all objects
            "xrayNone": "R??ntgenansicht (keine)", // Menu option to remove X-ray effect from all objects
            "select": "Ausw??hlen", // Menu option to select this object
            "undoSelect": "Abw??hlen", // Menu option to deselect this object
            "selectNone": "Alle abw??hlen", // Menu option to deselect all objects
            "clearSlices": "Schnittebenen l??schen" // Menu option to delete all slices made with the Slicing tool
        },
        "sectionToolContextMenu": { // Context menu that appears when we right-click an the Slicing tool
            "slice": "Schnitte", // Title of submenu for each slice, eg. "Slice #0, Slice #1" etc
            "clearSlices": "Schnittebenen l??schen", // Menu option to delete all slices
            "flipSlices": "Schnittebenen umdrehen", // Menu option to reverse the cutting direction of all slices
            "edit": "Bearbeiten", // Sub-menu option to edit a single slice
            "flip": "Umdrehen", // Sub-menu option to reverse the cutting direction of a single slice
            "delete": "L??schen" // Sub-menu option to delete a single slice
        }
    },

    // French

    "fr": {
        "busyModal": { // The dialog that appears in the center of the canvas while we are loading a model
            "loading": "Chargement" // Loading <myModel>
        },
        "NavCube": { // The 3D navigation cube at the bottom right of the canvas
            "front": "Face",
            "back": "Arri??re",//alternative: Dos
            "top": "Dessus",
            "bottom": "Dessous",
            "left": "Droite",
            "right": "Gauche"
        },
        "modelsExplorer": { // The "Models" tab on the left of the canvas
            "title": "Mod??les",
            "loadAll": "Afficher tout",
            "loadAllTip": "Afficher tous les mod??les du projet",
            "unloadAll": "Masquer tout",
            "unloadAllTip": "Masquer tous les mod??les",
            "add": "Ajouter",
            "addTip": "Ajouter un mod??le"
        },
        "objectsExplorer": { // The "Objects" tab on the left of the canvas
            "title": "Conteneurs",
            "showAll": "Afficher tout",
            "showAllTip": "Afficher tous les objets",
            "hideAll": "Masquer tout",
            "hideAllTip": "Masquer tous les objets"
        },
        "classesExplorer": { // The "Classes" tab on the left of the canvas
            "title": "Classes IFC",
            "showAll": "Afficher tout",
            "showAllTip": "Affiche toutes les classes",
            "hideAll": "Masquer tout",
            "hideAllTip": "Masquer toutes les classes"
        },
        "storeysExplorer": { // The "Storeys" tab on the left of the canvas
            "title": "??tages",
            "showAll": "Afficher tout",
            "showAllTip": "Afficher tous les ??tages",
            "hideAll": "Masquer tout",
            "hideAllTip": "Masquer tous les ??tages"
        },
        "propertiesInspector": { // The "Properties" tab on the right of the canvas
            "title": "Propri??t??s",
            "noObjectSelectedWarning": "Aucun objet n'a ??t?? inspect??. Cliquez avec le bouton droit ou le bouton long sur un objet et s??lectionnez \'Inspecter les propri??t??s\' pour afficher ses propri??t??s ici.",
            "noPropSetWarning": "Aucun ensemble de propri??t??s n'a ??t?? trouv?? pour cet objet."
        },
        "toolbar": { // The toolbar at the top of the canvas
            "toggleExplorer": "Afficher la structure", // Button to open or close the explorer panel on the left
            "toggleProperties": "Afficher les propri??t??s", // Button to open or close the properties panel on the right
            "resetViewTip": "R??initialiser la vue", // Button to reset the viewer to initial state
            "toggle2d3dTip": "Activer 2D/3D", // Button to toggle between 3D view and 2D plan view modes
            "togglePerspectiveTip": "Activer Perspective/Ortho", // Button to toggle between perspective and orthographic projection
            "viewFitTip": "Recadrer la vue", // Button to position the camera to fit all objects in view
            "firstPersonTip": "Mode 1ere personne", // Button to switch between first-person and orbit navigation modes
            "hideObjectsTip": "Masquer objets", // Button to activate "Hide objects" tool
            "selectObjectsTip": "S??lectionner", // Button to activate "Select objects" tool
            "queryObjectsTip": "Informations objets", // Button to activate "Query objects" tool
            "sliceObjectsTip": "Coupes", // Button to activate "Slice objects" tool
            "slicesMenuTip": "Outils de coupe", // Button to open the pull-down menu of existing section planes
            "showSpacesTip": "Afficher les espaces IFC", //Button to show IFC spaces
            "numSlicesTip": "Nombre de coupes" // Label shows number of sexisting section planes
        },
        "canvasContextMenu": { // Context menu that appears when we right-click on empty canvas space
            "viewFitAll": "Recadrer tout", // Menu option to position the camera to fit all objects in view
            "hideAll": "Masquer tout", // Menu option to hide all objects
            "showAll": "Afficher tout", // Menu option to show all objects
            "xRayAll": "X-Ray tout", // Menu option to X-ray all objects
            "xRayNone": "X-Ray aucun", // Menu option to remove X-ray effect from all objects
            "selectNone": "R??initialiser s??lection", // Menu option to clear any currently selected objects
            "resetView": "R??initialiser la vue", // Menu option to reset the view to initial state
            "clearSlices": "Effacer les coupes" // Menu option to delete all section planes created with the Slice tool
        },
        "modelsContextMenu": { // Context menu that appears when we right-click on a model in the "Models" tab
            "loadModel": "Charger",
            "unloadModel": "Retirer",
            "editModel": "Editer",
            "deleteModel": "Supprimer",
            "loadAllModels": "Tout charger",
            "unloadAllModels": "Tout retirer",
            "clearSlices": "Effacer les coupes"
        },
        "objectContextMenu": { // Context menu that appears when we right-click on an object in the 3D view
            "inspectProperties": "Inspecter les propri??t??s", //menu option to inspect properties in the properties inspector
            "viewFit": "Recadrer objet", // Menu option to position the camera to fit the object in view
            "viewFitAll": "Recadrer la vue", // Menu option to position the camera to fit all objects in view
            "showInTree": "Afficher arborescence", // Menu option to show the object in the Objects tab's tree
            "hide": "Masquer", // Menu option to hide this object
            "hideOthers": "Isoler l'objet", // Menu option to hide other objects
            "hideAll": "Tout masquer", // Menu option to hide all objects
            "showAll": "Tout afficher", // Menu option to show all objects
            "xray": "X-Ray", // Menu option to X-ray this object
            "xrayOthers": "X-Ray autres", // Menu option to undo X-ray on all other objects
            "xrayAll": "X-Ray tout", // Menu option to X-ray all objects
            "xrayNone": "X-Ray aucun", // Menu option to remove X-ray effect from all objects
            "select": "S??lectionner", // Menu option to select this object
            "undoSelect": "Annuler s??lection", // Menu option to deselect this object
            "selectNone": "R??initialiser s??lection", // Menu option to deselect all objects
            "clearSlices": "Effacer les coupes" // Menu option to delete all slices made with the Slicing tool
        },
        "treeViewContextMenu": { // Context menu that appears when we right-click an object node in the tree within in the "Objects" tab
            "inspectProperties": "Inspecter les propri??t??s", //menu option to inspect properties in the properties inspector
            "viewFit": "Recadrer objet", // Menu option to position the camera to fit the object in view
            "viewFitAll": "Recadrer la vue", // Menu option to position the camera to fit all objects in view
            "isolate": "Isoler", // Menu option to hide all other objects and fit this object in view
            "hide": "Masquer", // Menu option to hide this object
            "hideOthers": "Masquer autres", // Menu option to hide other objects
            "hideAll": "Masquer tout", // Menu option to hide all objects
            "show": "Afficher", // Menu option to show this object
            "showOthers": "Afficher les autres", // Menu option to hide this object and show all others
            "showAll": "Afficher tout", // Menu option to show all objects
            "xray": "X-Ray", // Menu option to X-ray this object
            "undoXray": "Annuler X-Ray", // Menu option to undo X-ray on this object
            "xrayOthers": "X-Ray autres", // Menu option to undo X-ray on all other objects
            "xrayAll": "X-Ray tout", // Menu option to X-ray all objects
            "xrayNone": "X-Ray aucun", // Menu option to remove X-ray effect from all objects
            "select": "S??lectionner", // Menu option to select this object
            "undoSelect": "Annuler s??lection", // Menu option to deselect this object
            "selectNone": "R??initialiser s??lection", // Menu option to deselect all objects
            "clearSlices": "Effacer les coupes" // Menu option to delete all slices made with the Slicing tool
        },
        "sectionToolContextMenu": { // Context menu that appears when we right-click an the Slicing tool
            "slice": "Coupe", // Title of submenu for each slice, eg. "Slice #0, Slice #1" etc
            "clearSlices": "Effacer les coupes", // Menu option to delete all slices
            "flipSlices": "Inverser les coupes", // Menu option to reverse the cutting direction of all slices
            "edit": "Editer", // Sub-menu option to edit a single slice
            "flip": "Inverser", // Sub-menu option to reverse the cutting direction of a single slice
            "delete": "Supprimer" // Sub-menu option to delete a single slice
        }
    },

    //Polish

    "pl": {
        "busyModal": { // The dialog that appears in the center of the canvas while we are loading a model
            "loading": "??adowanie" // Loading <myModel>
        },
        "NavCube": { // The 3D navigation cube at the bottom right of the canvas
            "front": "Prz??d",
            "back": "Ty??",
            "top": "G??ra",
            "bottom": "D????",
            "left": "Lewy",
            "right": "Prawy"
        },
        "modelsExplorer": { // The "Models" tab on the left of the canvas
            "title": "Model",
            "loadAll": "Za??aduj",
            "loadAllTip": "Za??aduj wszystkie modele",
            "unloadAll": "Zamknij",
            "unloadAllTip": "Zamnij wszystkie modele",
            "add": "Dodaj",
            "addTip": "Dodaj modele"
        },
        "objectsExplorer": { // The "Objects" tab on the left of the canvas
            "title": "Obiekty",
            "showAll": "Poka??",
            "showAllTip": "Poka?? wszystkie obiekty",
            "hideAll": "Ukryj",
            "hideAllTip": "Ukryj wszystkie obiekty"
        },
        "classesExplorer": { // The "Classes" tab on the left of the canvas
            "title": "Typy",
            "showAll": "Poka??",
            "showAllTip": "Poka?? wszystkie typy",
            "hideAll": "Ukryj",
            "hideAllTip": "Ukryj wszystkie typy"
        },
        "storeysExplorer": { // The "Storeys" tab on the left of the canvas
            "title": "Pi??tra",
            "showAll": "Poka??",
            "showAllTip": "Poka?? wszystkie pi??tra",
            "hideAll": "Ukryj",
            "hideAllTip": "Ukryj wszystkie pi??tra"
        },
        "propertiesInspector": { // The "Properties" tab on the right of the canvas
            "title": "W??a??ciwo??ci",
            "noObjectSelectedWarning": "Nie sprawdzono ??adnego obiektu. Kliknij prawym przyciskiem myszy lub kliknij d??ugo na obiekcie i wybierz opcj?? \'Sprawd?? w??a??ciwo??ci\', aby wy??wietli?? jego w??a??ciwo??ci.",
            "noPropSetWarning": "Nie znaleziono ??adnych zestaw??w w??a??ciwo??ci dla tego obiektu."
        },
        "toolbar": { // The toolbar at the top of the canvas
            "toggleExplorer": "Prze????czanie eksploratora", // Button to open or close the explorer panel on the left
            "toggleProperties": "Prze????czanie w??a??ciwo??ci", // Button to open or close the properties panel on the right
            "resetViewTip": "Resetuj widok", // Button to reset the voewer to initial state
            "toggle2d3dTip": "Widok 2D/3D", // Button to toggle between 2D and 3D viewing modes
            "togglePerspectiveTip": "Widok Ortograficzny/Perspektywiczny", // Buttons to toggle between orthographic and perspective projection modes
            "viewFitTip": "Dopasowanie do widoku", // Button to fit everything in view
            "firstPersonTip": "Widok perspektywy pierwszoosobowej", // Button to toggle between first-person and orbiting camera navigation
            "hideObjectsTip": "Ukryj obiekt", // Button to activate/deactivate the Hide Objects tool
            "selectObjectsTip": "Zaznacz obiekt", // Button to activate/deactivate "Select objects" tool
            "queryObjectsTip": "Wywo??aj obiekt", // Button to activate/deactivate "Query objects" tool
            "sliceObjectsTip": "Przekroje obiekt??w", // Button to activate/deactivate "Slice objects" tool
            "slicesMenuTip": "Menu przekroi", // Button to open the pull-down menu of existing section planes
            "showSpacesTip": "Poka?? przestrzenie IFC", //Button to show IFC spaces
            "numSlicesTip": "Liczba przekroi" // Label shows number of existing section planes
        },
        "canvasContextMenu": { // Context menu that appears when we right-click on empty canvas space
            "viewFitAll": "Dopasuj widok do modelu", // Menu option to position the camera to fit all objects in view
            "hideAll": "Ukryj wszystkie", // Menu option to hide all objects
            "showAll": "Poka?? wszystkie", // Menu option to show all objects
            "xRayAll": "Prze??wietl wszystko", // Menu option to X-ray all objects
            "xRayNone": "Usu?? prze??wietlenia", // Menu option to remove X-ray effect from all objects
            "selectNone": "Usu?? zaznaczenia", // Menu option to clear any currently selected objects
            "resetView": "Zresetuj widok", // Menu option to reset the view to initial state
            "clearSlices": "Usu?? przekroje" // Menu option to delete all section planes created with the Slice tool
        },
        "modelsContextMenu": { // Context menu that appears when we right-click on a model in the "Models" tab
            "loadModel": "Za??aduj", // Menu option to load a model
            "unloadModel": "Zamknij", // Menu option to unload a model
            "editModel": "Edytuj", // Menu option to edit a model (re-upload its IFC file)
            "deleteModel": "Usu??", // Menu option to delete a model
            "loadAllModels": "Za??aduj wszystkie", // Menu option to load all available models
            "unloadAllModels": "Zamknij wszystkie", // Menu option to unload all available models
            "clearSlices": "Usu?? przekroje" // Menu option to delete all slices made with the Slicing tool
        },
        "objectContextMenu": { // Context menu that appears when we right-click on an object in the 3D view
            "inspectProperties": "Sprawd?? w??a??ciwo??ci", //menu option to inspect properties in the properties inspector
            "viewFit": "Dopasuj widok do obiektu", // Menu option to position the camera to fit the right-clicked object in view
            "viewFitAll": "Dopasuj widok do modelu", // Menu option to position the camera to fit all objects in view
            "showInTree": "Poka?? w widoku drzewa", // Menu option to show the right-clicked object in the Objects tab's tree
            "hide": "Ukryj", // Menu option to hide the right-clicked object
            "hideOthers": "Ukryj pozosta??e", // Menu option to hide all objects except the right-clicked object
            "hideAll": "Ukryj wszystkie", // Menu option to hide all objects
            "showAll": "Poka?? wszystkie", // Menu option to show all objects
            "xray": "Prze??wietl", // Menu option to X-ray the right-clicked object
            "xrayOthers": "Prze??wietl pozosta??e", // Menu option to X-ray all objects except the right-clicked object
            "xrayAll": "Prze??wietl wszystkie", // Menu option to X-ray all objects
            "xrayNone": "Usu?? prze??wietlenia",  // Menu option to undo X-ray on all objects
            "select": "Zaznacz",  // Menu option to select the right-clicked object
            "undoSelect": "Usu?? zaznaczenie",  // Menu option to unselect the right-clicked object
            "selectNone": "Usu?? wszystkie zaznaczenia", // Menu option to unselect all objects
            "clearSlices": "Usu?? przekroje" // Menu option to delete all slices
        },
        "treeViewContextMenu": { // Context menu that appears when we right-click an object node in the tree within in the "Objects" tab
            "inspectProperties": "Sprawd?? w??a??ciwo??ci", //menu option to inspect properties in the properties inspector
            "viewFit": "Dopasuj widok do obiektu", // Menu option to position the camera to fit the object in view
            "viewFitAll": "Dopasuj widok do modelu", // Menu option to position the camera to fit all objects in view
            "isolate": "Wyizoluj", // Menu option to hide all other objects and fit this object in view
            "hide": "Ukryj", // Menu option to hide this object
            "hideOthers": "Ukryj pozosta??e", // Menu option to hide other objects
            "hideAll": "Ukryj wszystkie", // Menu option to hide all objects
            "show": "Poka??", // Menu option to show this object
            "showOthers": "Poka?? pozosta??e", // Menu option to hide this object and show all others
            "showAll": "Poka?? wszystkie", // Menu option to show all objects
            "xray": "Prze??wietl", // Menu option to X-ray this object
            "undoXray": "Cofnij prze??wietlenie", // Menu option to undo X-ray on this object
            "xrayOthers": "Prze??wietl pozosta??e", // Menu option to undo X-ray on all other objects
            "xrayAll": "Prze??wietl wszystkie", // Menu option to X-ray all objects
            "xrayNone": "Usu?? prze??wietlenia", // Menu option to remove X-ray effect from all objects
            "select": "W??hlen", // Menu option to select this object
            "undoSelect": "Zaznacz", // Menu option to deselect this object
            "selectNone": "Usu?? wszystkie zaznaczenia", // Menu option to deselect all objects
            "clearSlices": "Usu?? przekroje" // Menu option to delete all slices made with the Slicing tool
        },
        "sectionToolContextMenu": { // Context menu that appears when we right-click an the Slicing tool
            "clearSlices": "Usu?? przekroje", // Menu option to delete all slices
            "flipSlices": "Zmie?? kierunek", // Menu option to reverse the cutting direction of all slices
            "edit": "Edytuj", // Sub-menu option to edit a single slice
            "flip": "Obr????", // Sub-menu option to reverse the cutting direction of a single slice
            "delete": "Usu??" // Sub-menu option to delete a single slice
        }
    },

    // Russian

    "ru": {
        "busyModal": {
            // The dialog that appears in the center of the canvas while we are loading a model
            "loading": "????????????????", // Loading <myModel>
        },
        "NavCube": {
            // The 3D navigation cube at the bottom right of the canvas
            "front": "??????????",
            "back": "??????",
            "top": "????????",
            "bottom": "??????",
            "left": "????????",
            "right": "??????????",
        },
        "modelsExplorer": {
            // The "Models" tab on the left of the canvas
            "title": "????????????",
            "loadAll": "?????????????????? ??????",
            "loadAllTip": "?????????????????? ?????? ???????????? ?? ???????? ??????????????",
            "unloadAll": "?????????????????? ??????",
            "unloadAllTip": "?????????????????? ?????? ????????????",
            "add": "????????????????",
            "addTip": "???????????????? ????????????",
        },
        "objectsExplorer": {
            // The "Objects" tab on the left of the canvas
            "title": "??????????????",
            "showAll": "???????????????? ??????",
            "showAllTip": "???????????????? ?????? ??????????????",
            "hideAll": "???????????? ??????",
            "hideAllTip": "???????????? ?????? ??????????????",
        },
        "classesExplorer": {
            // The "Classes" tab on the left of the canvas
            "title": "????????????",
            "showAll": "???????????????? ??????",
            "showAllTip": "???????????????? ?????? ????????????",
            "hideAll": "???????????? ??????",
            "hideAllTip": "???????????? ?????? ????????????",
        },
        "storeysExplorer": {
            // The "Storeys" tab on the left of the canvas
            "title": "??????????",
            "showAll": "???????????????? ??????",
            "showAllTip": "???????????????? ?????? ??????????",
            "hideAll": "???????????? ??????",
            "hideAllTip": "???????????? ?????? ??????????",
        },
        "propertiesInspector": {
            // The "Properties" tab on the right of the canvas
            "title": "????????????????",
            "noObjectSelectedWarning": "???? ???????? ???????????? ???? ????????????????. ???????????????? ???????????? ?????????????? ???????? ?????? ?????????????? ???????????? ???? ?????????????? ?? ???????????????? \'?????????????????? ????????????????\', ?????????? ?????????????????????? ?????? ???????????????? ??????????.",
            "noPropSetWarning": "?????? ?????????? ?????????????? ???? ?????????????? ???? ???????????? ???????????? ??????????????."
        },
        "toolbar": {
            // The toolbar at the top of the canvas
            "toggleExplorer": "?????????????????????? ??????????????????", // Button to open or close the explorer panel on the left
            "toggleProperties": "?????????????????????? ????????????????", // Button to open or close the properties panel on the right
            "resetViewTip": "???????????????? ??????", // Button to reset the viewer to initial state
            "toggle2d3dTip": "?????????????????????? 2D/3D", // Button to toggle between 3D view and 2D plan view modes
            "togglePerspectiveTip": "?????????????????????? ???????????????? ??????????????????????/????????", // Button to toggle between perspective and orthographic projection
            "viewFitTip": "???????????????? ?????? ????????????", // Button to position the camera to fit all objects in view
            "firstPersonTip": "?????????????????????? ?????????? ?????????????????? ???? ?????????????? ????????", // Button to switch between first-person and orbit navigation modes
            "hideObjectsTip": "???????????? ??????????????", // Button to activate "Hide objects" tool
            "selectObjectsTip": "?????????????? ??????????????", // Button to activate "Select objects" tool
            "queryObjectsTip": "?????????????? ??????????????", // Button to activate "Query objects" tool
            "sliceObjectsTip": "?????????????? ??????????????", // Button to activate "Slice objects" tool
            "slicesMenuTip": "???????? ??????????????", // Button to open the pull-down menu of existing section planes
            "showSpacesTip": "???????????????? ?????????? IFC", //Button to show IFC spaces
            "numSlicesTip": "???????????????????? ???????????????????????? ??????????????", // Label shows number of sexisting section planes
        },
        "canvasContextMenu": {
            // Context menu that appears when we right-click on empty canvas space
            "viewFitAll": "?????? ???????????????????? ??????", // Menu option to position the camera to fit all objects in view
            "hideAll": "???????????? ??????", // Menu option to hide all objects
            "showAll": "???????????????? ??????", // Menu option to show all objects
            "xRayAll": "?????????????? ??????", // Menu option to X-ray all objects
            "xRayNone": "???????????????? ??????????????", // Menu option to remove X-ray effect from all objects
            "selectNone": "???????????????? ??????????", // Menu option to clear any currently selected objects
            "resetView": "???????????????? ??????", // Menu option to reset the view to initial state
            "clearSlices": "???????????????? ??????????????", // Menu option to delete all section planes created with the Slice tool
        },
        "modelsContextMenu": {
            // Context menu that appears when we right-click on a model in the "Models" tab
            "loadModel": "??????????????????",
            "unloadModel": "??????????????????",
            "editModel": "??????????????????????????",
            "deleteModel": "??????????????",
            "loadAllModels": "?????????????????? ??????",
            "unloadAllModels": "?????????????????? ??????",
            "clearSlices": "???????????????? ??????????????",
        },
        "objectContextMenu": {
            // Context menu that appears when we right-click on an object in the 3D view
            "inspectProperties": "?????????????????? ????????????????", //menu option to inspect properties in the properties inspector
            "viewFit": "???????????????? ???????? ????????????", // Menu option to position the camera to fit the object in view
            "viewFitAll": "???????????????? ?????? ??????????????", // Menu option to position the camera to fit all objects in view
            "showInTree": "???????????????? ?? ????????????????????", // Menu option to show the object in the Objects tab"s tree
            "hide": "????????????", // Menu option to hide this object
            "hideOthers": "???????????? ????????????", // Menu option to hide other objects
            "hideAll": "???????????? ??????", // Menu option to hide all objects
            "showAll": "???????????????? ??????", // Menu option to show all objects
            "xray": "??????????????", // Menu option to X-ray this object
            "xrayOthers": "?????????????? ??????????????????", // Menu option to undo X-ray on all other objects
            "xrayAll": "?????????????? ??????", // Menu option to X-ray all objects
            "xrayNone": "???????????????? ??????????????", // Menu option to remove X-ray effect from all objects
            "select": "??????????????", // Menu option to select this object
            "undoSelect": "???????????????? ??????????", // Menu option to deselect this object
            "selectNone": "???????????????? ??????????", // Menu option to deselect all objects
            "clearSlices": "???????????????? ??????????????", // Menu option to delete all slices made with the Slicing tool
        },
        "treeViewContextMenu": {
            // Context menu that appears when we right-click an object node in the tree within in the "Objects" tab
            "inspectProperties": "?????????????????? ????????????????", //menu option to inspect properties in the properties inspector
            "viewFit": "???????????????? ???????? ????????????", // Menu option to position the camera to fit the object in view
            "viewFitAll": "???????????????? ?????? ??????????????", // Menu option to position the camera to fit all objects in view
            "isolate": "??????????????????????", // Menu option to hide all other objects and fit this object in view
            "hide": "????????????", // Menu option to hide this object
            "hideOthers": "???????????? ????????????", // Menu option to hide other objects
            "hideAll": "???????????? ??????", // Menu option to hide all objects
            "show": "????????????????", // Menu option to show this object
            "showOthers": "???????????????? ??????????????????", // Menu option to hide this object and show all others
            "showAll": "???????????????? ??????", // Menu option to show all objects
            "xray": "??????????????", // Menu option to X-ray this object
            "undoXray": "???????????????? ??????????????", // Menu option to undo X-ray on this object
            "xrayOthers": "?????????????? ??????????????????", // Menu option to undo X-ray on all other objects
            "xrayAll": "???????????? ??????", // Menu option to X-ray all objects
            "xrayNone": "???????????????? ??????????????", // Menu option to remove X-ray effect from all objects
            "select": "??????????????", // Menu option to select this object
            "undoSelect": "???????????????? ??????????", // Menu option to deselect this object
            "selectNone": "???????????????? ??????????", // Menu option to deselect all objects
            "clearSlices": "???????????????? ??????????????", // Menu option to delete all slices made with the Slicing tool
        },
        "sectionToolContextMenu": {
            // Context menu that appears when we right-click an the Slicing tool
            "slice": "??????????????", // Title of submenu for each slice, eg. "Slice #0, Slice #1" etc
            "clearSlices": "???????????????? ??????????????", // Menu option to delete all slices
            "flipSlices": "???????????????????? ??????????????", // Menu option to reverse the cutting direction of all slices
            "edit": "??????????????????????????", // Sub-menu option to edit a single slice
            "flip": "????????????????????", // Sub-menu option to reverse the cutting direction of a single slice
            "delete": "??????????????", // Sub-menu option to delete a single slice
        }
    }
};

export { messages };